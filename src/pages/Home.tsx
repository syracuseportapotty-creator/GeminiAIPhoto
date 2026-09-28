import { Link } from 'react-router-dom';
import { Search, ArrowRight, MousePointerClick, ClipboardPaste, Wand2, ShieldCheck, Zap, Eye } from 'lucide-react';
import SEO from '@/components/SEO';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import PromptCard from '@/components/PromptCard';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';
import { categories, pages, homeFaqs, siteConfig } from '@/data/site';
import { organizationJsonLd, websiteJsonLd } from '@/data/jsonLd';

const categoryRoutes: Record<string, string> = {
  boys: '/gemini-photo-prompt-for-boys',
  girls: '/gemini-girl-photo-prompt',
  couples: '/gemini-couple-photo-prompt',
  trending: '/gemini-ai-photo-prompt-trending',
  professional: '/gemini-ai-photo-prompt-2x2-formal-blue-background',
  festivals: '/gemini-ai-halloween-photo-prompt',
};

const howItWorks = [
  { icon: ClipboardPaste, title: 'Copy a prompt', text: 'Click the copy button on any prompt box to grab the full text instantly.' },
  { icon: Wand2, title: 'Paste into Gemini', text: 'Open Google Gemini in your browser and paste the prompt with your photo.' },
  { icon: Eye, title: 'Get your edit', text: 'Gemini generates a realistic AI photo edit based on your instructions.' },
];

const whyBetter = [
  { icon: ShieldCheck, title: 'Tested for realism', text: 'Every prompt is checked for natural lighting, skin texture, and clean composition.' },
  { icon: Zap, title: 'Copy-paste ready', text: 'No tweaking required. Paste the prompt as-is and get a great result the first time.' },
  { icon: MousePointerClick, title: 'Organized by style', text: 'Find exactly what you need — boys, girls, couples, festivals, and trending looks.' },
];

export default function Home() {
  const trendingPages = pages.filter((p) => p.category === 'trending').slice(0, 3);
  const latestPages = pages.slice(0, 6);

  return (
    <>
      <SEO
        title={`${siteConfig.name} — Free Copy & Paste Prompts`}
        description={siteConfig.description}
        path="/"
        keywords={['gemini ai photo prompt', 'ai gemini photo prompt', 'prompt for gemini ai', 'photo prompts for gemini ai', 'google gemini ai prompt']}
        jsonLd={[organizationJsonLd(), websiteJsonLd()]}
      />

      <Hero />

      {/* Search */}
      <section className="container-px">
        <div className="card-surface flex flex-col items-center gap-4 p-6 sm:p-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold tracking-tight sm:text-xl">Looking for a specific prompt?</h2>
            <p className="mt-1 text-sm text-muted">Search all Gemini AI photo prompts by keyword, style, or category.</p>
          </div>
          <Link to="/gemini-ai-photo-prompt-copy-paste" className="btn-secondary border-default">
            <Search className="h-4 w-4" />
            Browse all prompts
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container-px mt-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">Categories</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Featured Categories</h2>
          <p className="mt-2 text-sm text-muted sm:text-base">Browse prompts by category — from boys and girls to couples, festivals, and trending styles.</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} to={categoryRoutes[cat.slug] || '/'} />
          ))}
        </div>
      </section>

      {/* Popular Searches */}
      <section className="container-px mt-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">Popular</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Popular Searches</h2>
          <p className="mt-2 text-sm text-muted sm:text-base">The most-searched Gemini AI photo prompt styles, all in one place.</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {[
            { to: '/gemini-ai-photo-prompt-copy-paste', label: 'Copy Paste Prompts' },
            { to: '/gemini-photo-prompt-for-boys', label: 'Boys Prompts' },
            { to: '/gemini-girl-photo-prompt', label: 'Girls Prompts' },
            { to: '/gemini-couple-photo-prompt', label: 'Couple Prompts' },
            { to: '/gemini-ai-photo-prompt-trending', label: 'Trending Prompts' },
            { to: '/gemini-ai-photo-prompt-2x2-formal-blue-background', label: '2x2 Formal Blue' },
            { to: '/gemini-ai-photoshoot-prompt', label: 'Photoshoot' },
            { to: '/gemini-ai-polaroid-prompt', label: 'Polaroid' },
            { to: '/gemini-ai-retro-style-prompt', label: 'Retro Style' },
            { to: '/gemini-ai-hairstyle-prompt', label: 'Hairstyle' },
            { to: '/gemini-ai-halloween-photo-prompt', label: 'Halloween' },
            { to: '/gemini-ai-christmas-photo-prompt', label: 'Christmas' },
            { to: '/how-to-write-gemini-ai-photo-prompt', label: 'Prompt Guide' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full border border-default px-4 py-2 text-sm font-medium text-muted transition-all duration-200 hover:border-accent-500 hover:text-accent-600 hover:shadow-sm dark:hover:text-accent-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="container-px mt-20">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">Trending</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Trending Prompt Cards</h2>
            <p className="mt-2 text-sm text-muted sm:text-base">The most-copied Gemini AI photo prompts right now.</p>
          </div>
          <Link to="/gemini-ai-photo-prompt-trending" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-accent-600 hover:underline dark:text-accent-400 sm:flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trendingPages.map((p) => (
            <PromptCard key={p.slug} page={p} />
          ))}
        </div>
      </section>

      {/* Latest */}
      <section className="container-px mt-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">Latest</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Latest Prompt Cards</h2>
          <p className="mt-2 text-sm text-muted sm:text-base">Freshly added Gemini AI photo prompts across every category.</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latestPages.map((p) => (
            <PromptCard key={p.slug} page={p} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container-px mt-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">How it works</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Three steps to a realistic AI photo</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {howItWorks.map((step, i) => (
            <div key={i} className="card-surface relative p-6">
              <span className="absolute right-5 top-5 text-3xl font-extrabold text-[var(--border)]">{i + 1}</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950 dark:text-accent-400">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why better */}
      <section className="container-px mt-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">Why us</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Why Our Prompts Work Better</h2>
          <p className="mt-2 text-sm text-muted sm:text-base">We focus on realism, structure, and copy-paste convenience.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {whyBetter.map((item, i) => (
            <div key={i} className="card-surface p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950 dark:text-accent-400">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px mt-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">FAQ</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Frequently Asked Questions</h2>
        </div>
        <div className="mt-8 max-w-3xl">
          <FaqAccordion items={homeFaqs} />
        </div>
      </section>

      {/* CTA */}
      <div className="mt-20">
        <CtaBanner />
      </div>
    </>
  );
}
