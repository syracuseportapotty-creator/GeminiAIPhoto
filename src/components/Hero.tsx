import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[100px]" />
      <div className="container-px relative pt-16 pb-12 sm:pt-20 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-default bg-[var(--bg-card)] px-3.5 py-1.5 text-xs font-semibold text-muted animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-accent-600 dark:text-accent-400" />
            Free copy &amp; paste Gemini AI prompts
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl animate-fade-in">
            Gemini AI Photo Prompt —{' '}
            <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
              Free Copy &amp; Paste Prompts
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg animate-fade-in">
            Create realistic AI photo edits using Gemini prompts for boys, girls, couples, professional portraits, festivals and trending styles.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-in">
            <Link to="/gemini-ai-photo-prompt-copy-paste" className="btn-primary">
              Explore Prompts
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/gemini-ai-photo-prompt-trending" className="btn-secondary border-default">
              <TrendingUp className="h-4 w-4" />
              Trending Prompts
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-accent-500" />
              15+ ready-to-use prompts
            </span>
            <span className="hidden h-3 w-px bg-[var(--border)] sm:block" />
            <span className="hidden sm:block">No signup required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
