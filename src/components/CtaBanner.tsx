import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="container-px">
      <div className="relative overflow-hidden rounded-3xl border border-default bg-[var(--bg-card)] p-8 sm:p-12 md:p-16">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-950 dark:text-accent-300">
              <Sparkles className="h-3.5 w-3.5" />
              Ready to create?
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Start editing photos with Gemini AI today
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Copy any prompt, paste it into Google Gemini, and get a realistic AI photo edit in seconds. No signup, no cost.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/gemini-ai-photo-prompt-copy-paste" className="btn-primary">
              Explore Prompts
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/gemini-ai-photo-prompt-trending" className="btn-secondary border-default">
              Trending Prompts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
