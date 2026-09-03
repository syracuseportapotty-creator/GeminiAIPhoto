import { build } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');

const routes = [
  '/',
  '/gemini-ai-photo-prompt-copy-paste',
  '/gemini-ai-photo-prompt-trending',
  '/gemini-photo-prompt-for-boys',
  '/gemini-girl-photo-prompt',
  '/gemini-couple-photo-prompt',
  '/gemini-ai-photo-prompt-2x2-formal-blue-background',
  '/gemini-ai-photoshoot-prompt',
  '/gemini-ai-polaroid-prompt',
  '/gemini-ai-retro-style-prompt',
  '/gemini-ai-hairstyle-prompt',
  '/gemini-ai-halloween-photo-prompt',
  '/gemini-ai-christmas-photo-prompt',
  '/gemini-ai-birthday-prompt',
  '/how-to-write-gemini-ai-photo-prompt',
  '/about-us',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/disclaimer',
];

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
  const { render } = ssrModule;

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
