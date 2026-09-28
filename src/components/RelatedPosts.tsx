import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getPage } from '@/data/site';
import { getPageImages } from '@/data/pageImages';

export default function RelatedPosts({ slugs }: { slugs: string[] }) {
  const related = slugs.map(getPage).filter(Boolean) as NonNullable<ReturnType<typeof getPage>>[];
  if (related.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Related Prompts</h2>
      <p className="mt-2 text-sm text-muted">Keep exploring with these similar Gemini AI photo prompts.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((p) => (
          <Link
            key={p.slug}
            to={p.path}
            className="card-surface hover-lift group flex flex-col gap-2 overflow-hidden p-0"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={getPageImages(p.slug)?.hero}
                alt={p.imageAlt}
                width={400}
                height={225}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2 p-5">
            <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
            <p className="line-clamp-2 text-sm text-muted">{p.intro}</p>
            <span className="mt-auto flex items-center gap-1 pt-1 text-sm font-semibold text-accent-600 dark:text-accent-400">
              Read more
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
