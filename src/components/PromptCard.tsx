import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import type { PageData } from '@/data/site';
import { getCategory } from '@/data/site';
import { getPageImages } from '@/data/pageImages';

export default function PromptCard({ page }: { page: PageData }) {
  const category = page.category ? getCategory(page.category) : null;
  return (
    <Link
      to={page.path}
      className="card-surface hover-lift group flex flex-col gap-3 p-5"
    >
      <div className="aspect-[16/9] overflow-hidden rounded-lg border border-default">
        <img
          src={getPageImages(page.slug)?.hero}
          alt={page.imageAlt}
          width={400}
          height={225}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-2">
        {category && (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-2.5 py-1 text-xs font-semibold text-accent-700 dark:bg-accent-950 dark:text-accent-300">
            <Tag className="h-3 w-3" />
            {category.title}
          </span>
        )}
      </div>
      <h3 className="text-base font-bold leading-snug tracking-tight">{page.title}</h3>
      <p className="line-clamp-2 text-sm leading-relaxed text-muted">{page.intro}</p>
      <span className="mt-auto flex items-center gap-1 pt-1 text-sm font-semibold text-accent-600 dark:text-accent-400">
        View prompt
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
