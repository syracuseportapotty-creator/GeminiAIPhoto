import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found — Gemini AI Photo Prompt" description="The page you are looking for does not exist." path="/404" />
      <section className="container-px flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="text-6xl font-extrabold text-accent-600 dark:text-accent-400">404</span>
        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Page not found</h1>
        <p className="mt-3 max-w-md text-sm text-muted">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link to="/gemini-ai-photo-prompt-copy-paste" className="btn-secondary border-default">
            <ArrowLeft className="h-4 w-4" />
            Browse prompts
          </Link>
        </div>
      </section>
    </>
  );
}
