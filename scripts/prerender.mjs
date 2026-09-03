import { build } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');

// Routes are auto-generated from the page data to ensure every page
// gets its own prerendered HTML with the correct self-canonical tag.
// Previously this was a hardcoded list that missed 6 pages, causing them
// to fall back to the homepage canonical via the SPA catch-all.

async function main() {
  console.log('[prerender] Building SSR bundle...');

  await build({
    root,
    configFile: resolve(root, 'vite.config.ts'),
    build: {
      ssr: resolve(root, 'src/entry-server.tsx'),
      outDir: resolve(distDir, '.ssr'),
      emptyOutDir: true,
      rollupOptions: {
        output: { format: 'es' },
      },
    },
    logLevel: 'warn',
  });

  const ssrModule = await import(resolve(distDir, '.ssr', 'entry-server.js'));
  const { render, allRoutes: routes } = ssrModule;

  const templatePath = resolve(distDir, 'index.html');
  if (!existsSync(templatePath)) {
    throw new Error('index.html not found in dist/ — run the client build first.');
  }
  const template = await readFile(templatePath, 'utf-8');

  for (const route of routes) {
    const { html, helmet } = render(route);

    const helmetHtml = helmet
      ? `${helmet.title?.toString() || ''}${helmet.meta?.toString() || ''}${helmet.link?.toString() || ''}${helmet.script?.toString() || ''}`
      : '';

    let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    if (helmetHtml) {
      page = page.replace('</head>', `${helmetHtml}</head>`);
    }

    const outFile =
      route === '/'
        ? resolve(distDir, 'index.html')
        : resolve(distDir, `${route.replace(/^\//, '')}.html`);

    await mkdir(dirname(outFile), { recursive: true });
    await writeFile(outFile, page, 'utf-8');
    console.log(`[prerender] ${route} -> ${outFile.replace(distDir, '')}`);
  }

  console.log('[prerender] Done. Pre-rendered', routes.length, 'pages.');
}

main().catch((err) => {
  console.error('[prerender] Error:', err);
  process.exit(1);
});
