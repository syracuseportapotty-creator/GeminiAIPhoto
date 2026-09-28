import { Link } from 'react-router-dom';
import { Lightbulb, Sparkles, Wrench, CheckCircle2, XCircle, FileText } from 'lucide-react';
import SEO from './SEO';
import Breadcrumb from './Breadcrumb';
import CopyBox from './CopyBox';
import FaqAccordion from './FaqAccordion';
import RelatedPosts from './RelatedPosts';
import CtaBanner from './CtaBanner';
import { getCategory, pages as allPages } from '@/data/site';
import type { PageData } from '@/data/site';
import { getPageImages } from '@/data/pageImages';
import {
  breadcrumbJsonLd,
  articleJsonLd,
  faqJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from '@/data/jsonLd';

const internalLinkTargets = [
  { to: '/', label: 'Home' },
  { to: '/gemini-ai-photo-prompt-copy-paste', label: 'Copy Paste Prompts' },
  { to: '/gemini-ai-photo-prompt-trending', label: 'Trending' },
  { to: '/gemini-photo-prompt-for-boys', label: 'Boys' },
  { to: '/gemini-girl-photo-prompt', label: 'Girls' },
  { to: '/gemini-couple-photo-prompt', label: 'Couples' },
  { to: '/gemini-ai-photo-prompt-2x2-formal-blue-background', label: '2x2 Formal Blue' },
  { to: '/gemini-ai-photoshoot-prompt', label: 'Photoshoot' },
  { to: '/gemini-ai-polaroid-prompt', label: 'Polaroid' },
  { to: '/gemini-ai-retro-style-prompt', label: 'Retro Style' },
  { to: '/gemini-ai-hairstyle-prompt', label: 'Hairstyle' },
  { to: '/gemini-ai-halloween-photo-prompt', label: 'Halloween' },
  { to: '/gemini-ai-christmas-photo-prompt', label: 'Christmas' },
  { to: '/gemini-ai-birthday-prompt', label: 'Birthday' },
  { to: '/how-to-write-gemini-ai-photo-prompt', label: 'Prompt Guide' },
];

export default function PromptPage({ page }: { page: PageData }) {
  const category = page.category ? getCategory(page.category) : null;
  const isAbout = page.pageType === 'about';
  const isLegal = page.pageType === 'legal';
  const isPromptPage = page.pageType === 'prompt';

  const crumbs = [{ label: 'Home', path: '/' }];
  if (category) crumbs.push({ label: category.title, path: page.path });
  crumbs.push({ label: page.title, path: page.path });

  const jsonLd = [
    organizationJsonLd(),
    websiteJsonLd(),
    breadcrumbJsonLd(crumbs),
    articleJsonLd({
      title: page.h1,
      description: page.metaDescription,
      path: page.path,
    }),
  ];
  if (page.faqs.length > 0) jsonLd.push(faqJsonLd(page.faqs));

  return (
    <>
      <SEO
        title={page.metaTitle}
        description={page.metaDescription}
        path={page.path}
        keywords={page.keywords}
        jsonLd={jsonLd}
      />

      <article className="container-px py-10">
        <Breadcrumb items={crumbs.slice(1)} />

        <header className="mt-6 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            {page.h1}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{page.intro}</p>

          {/* Table of Contents */}
          {isPromptPage && (
            <nav className="mt-6 card-surface p-5" aria-label="Table of contents">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Table of Contents</p>
              <ol className="grid gap-1.5 text-sm sm:grid-cols-2">
                <li><a href="#copy-prompt" className="text-accent-600 hover:underline dark:text-accent-400">Copy the Main Prompt</a></li>
                {page.prompts.length > 0 && <li><a href="#prompts" className="text-accent-600 hover:underline dark:text-accent-400">10 Copy-Paste Prompts</a></li>}
                {page.variations.length > 0 && <li><a href="#variations" className="text-accent-600 hover:underline dark:text-accent-400">Prompt Variations</a></li>}
                {page.tips.length > 0 && <li><a href="#tips" className="text-accent-600 hover:underline dark:text-accent-400">Tips</a></li>}
                {page.bestPractices.length > 0 && <li><a href="#best-practices" className="text-accent-600 hover:underline dark:text-accent-400">Best Practices</a></li>}
                {page.commonMistakes.length > 0 && <li><a href="#mistakes" className="text-accent-600 hover:underline dark:text-accent-400">Common Mistakes</a></li>}
                <li><a href="#prompt-formula" className="text-accent-600 hover:underline dark:text-accent-400">Prompt Formula</a></li>
                {page.faqs.length > 0 && <li><a href="#faq" className="text-accent-600 hover:underline dark:text-accent-400">FAQs</a></li>}
                <li><a href="#explore" className="text-accent-600 hover:underline dark:text-accent-400">Explore More</a></li>
                {page.related.length > 0 && <li><a href="#related" className="text-accent-600 hover:underline dark:text-accent-400">Related Prompts</a></li>}
              </ol>
            </nav>
          )}
        </header>

        {isPromptPage && (
          <>
            {/* Hero image */}
            <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-default">
              <img
                src={getPageImages(page.slug)?.hero}
                alt={page.imageAlt}
                width={1200}
                height={675}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Preview images */}
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {page.previewAlts.map((alt, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] overflow-hidden rounded-xl border border-default"
                >
                  <img
                    src={getPageImages(page.slug)?.previews[i]}
                    alt={alt}
                    width={600}
                    height={450}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main copy prompt box */}
            {page.prompt && (
              <section id="copy-prompt" className="mt-10 scroll-mt-20">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                  <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Copy the Main Prompt</h2>
                </div>
                <CopyBox prompt={page.prompt} />
              </section>
            )}

            {/* 10 prompts */}
            {page.prompts.length > 0 && (
              <section id="prompts" className="mt-12 scroll-mt-20">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                  <h2 className="text-xl font-bold tracking-tight sm:text-2xl">10 Copy-Paste Prompts</h2>
                </div>
                <p className="mb-6 text-sm text-muted">
                  Each prompt below is unique and ready to use. Pick the style that fits your photo, copy it, and paste into Google Gemini.
                </p>
                <div className="flex flex-col gap-5">
                  {page.prompts.map((p, i) => (
                    <div key={i}>
                      <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-700 dark:text-accent-300">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-100 text-xs font-bold text-accent-700 dark:bg-accent-950 dark:text-accent-300">
                          {i + 1}
                        </span>
                        {p.label}
                      </h3>
                      <CopyBox prompt={p.text} label={p.label} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Variations */}
            {page.variations.length > 0 && (
              <section id="variations" className="mt-12 scroll-mt-20">
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Prompt Variations</h2>
                <p className="mt-2 text-sm text-muted">
                  Different takes on the {page.primaryKeyword} — choose the style that fits your photo.
                </p>
                <div className="mt-6 flex flex-col gap-5">
                  {page.variations.map((v) => (
                    <div key={v.label}>
                      <h3 className="mb-2 text-sm font-semibold text-accent-700 dark:text-accent-300">{v.label}</h3>
                      <CopyBox prompt={v.text} label={v.label} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tips */}
            {page.tips.length > 0 && (
              <section id="tips" className="mt-12 scroll-mt-20">
                <div className="mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                  <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Tips for Better Results</h2>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {page.tips.map((tip, i) => (
                    <li key={i} className="card-surface flex gap-3 p-4">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-50 text-xs font-bold text-accent-700 dark:bg-accent-950 dark:text-accent-300">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-muted">{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Best Practices */}
            {page.bestPractices.length > 0 && (
              <section id="best-practices" className="mt-12 scroll-mt-20">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                  <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Best Practices</h2>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {page.bestPractices.map((bp, i) => (
                    <li key={i} className="card-surface flex gap-3 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600 dark:text-accent-400" />
                      <span className="text-sm leading-relaxed text-muted">{bp}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Common Mistakes */}
            {page.commonMistakes.length > 0 && (
              <section id="mistakes" className="mt-12 scroll-mt-20">
                <div className="mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Common Mistakes to Avoid</h2>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {page.commonMistakes.map((m, i) => (
                    <li key={i} className="card-surface flex gap-3 p-4">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <span className="text-sm leading-relaxed text-muted">{m}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {/* Prompt Formula */}
            <section id="prompt-formula" className="mt-12 scroll-mt-20">
              <div className="mb-4 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Prompt Formula</h2>
              </div>
              <p className="mb-4 text-sm text-muted">
                Use this formula as a starting point to write your own variations. Replace each bracketed section with your own details.
              </p>
              <div className="card-surface p-5">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-muted">{`Subject → Lighting → Background → Style → Quality → Face instructions

Example:
[describe person] → [studio/golden-hour/flash] → [blurred/clean/scenic] → [portrait/cinematic/polaroid] → 4K → keep face natural and recognizable`}</pre>
              </div>
            </section>
          </>
        )}

        {/* About page content */}
        {isAbout && page.legalSections && page.legalSections.length > 0 && (
          <section className="mt-8 max-w-3xl">
            {page.legalSections.map((section, i) => (
              <div key={i} className={i > 0 ? 'mt-8' : ''}>
                <div className="card-surface p-6 sm:p-8">
                  <h2 className="text-xl font-bold tracking-tight">{section.heading}</h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="mt-3 text-sm leading-relaxed text-muted">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Legal page content */}
        {isLegal && page.legalSections && page.legalSections.length > 0 && (
          <section className="mt-8 max-w-3xl">
            <div className="card-surface p-6 sm:p-8">
              {page.legalSections.map((section, i) => (
                <div key={i} className={i > 0 ? 'mt-8' : ''}>
                  <div className="mb-2 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                    <h2 className="text-xl font-bold tracking-tight">{section.heading}</h2>
                  </div>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="mt-2 text-sm leading-relaxed text-muted">{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {page.faqs.length > 0 && (
          <section id="faq" className="mt-12 max-w-3xl scroll-mt-20">
            <div className="mb-4 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-accent-600 dark:text-accent-400" />
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Frequently Asked Questions</h2>
            </div>
            <FaqAccordion items={page.faqs} />
          </section>
        )}

        {/* Internal links — 10+ links */}
        <section id="explore" className="mt-12 max-w-3xl scroll-mt-20">
          <h2 className="text-lg font-bold tracking-tight">Explore More Prompts</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {internalLinkTargets.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full border border-default px-4 py-2 text-sm text-muted transition-colors hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Related */}
        {page.related.length > 0 && (
          <section id="related" className="mt-14 scroll-mt-20">
            <RelatedPosts slugs={page.related} />
          </section>
        )}
      </article>

      <div className="mt-16">
        <CtaBanner />
      </div>
    </>
  );
}
