import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export type Crumb = { label: string; to?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm">
      <Link
        to="/"
        className="flex items-center gap-1 text-muted transition-colors hover:text-accent-600 dark:hover:text-accent-400"
      >
        <Home className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only">Home</span>
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-muted" />
          {item.to ? (
            <Link
              to={item.to}
              className="text-muted transition-colors hover:text-accent-600 dark:hover:text-accent-400"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-[var(--text)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
