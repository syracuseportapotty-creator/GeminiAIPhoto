import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, CornerDownLeft } from 'lucide-react';
import { pages } from '@/data/site';

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const q = query.trim().toLowerCase();
  const results = q
    ? pages.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.h1.toLowerCase().includes(q) ||
          p.primaryKeyword.toLowerCase().includes(q) ||
          p.keywords.some((k) => k.toLowerCase().includes(q))
      )
    : [];

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative mt-[10vh] w-full max-w-2xl px-4 animate-scale-in">
        <div className="overflow-hidden rounded-2xl border border-default bg-[var(--bg-card)] shadow-2xl">
          <div className="flex items-center gap-3 border-b border-default px-5 py-4">
            <Search className="h-5 w-5 shrink-0 text-muted" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search prompts, categories, styles..."
              className="flex-1 bg-transparent text-base outline-none placeholder:text-muted"
              aria-label="Search prompts"
            />
            <button
              onClick={onClose}
              aria-label="Close search"
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted transition-colors hover:bg-[var(--bg-subtle)] hover:text-[var(--text)]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[55vh] overflow-y-auto p-2">
            {q && results.length === 0 && (
              <p className="px-4 py-8 text-center text-sm text-muted">No prompts found for "{query}".</p>
            )}
            {!q && (
              <p className="px-4 py-8 text-center text-sm text-muted">Start typing to search all prompts.</p>
            )}
            {results.map((p) => (
              <button
                key={p.slug}
                onClick={() => handleSelect(p.path)}
                className="group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors hover:bg-[var(--bg-subtle)]"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{p.title}</p>
                  <p className="truncate text-xs text-muted">{p.primaryKeyword}</p>
                </div>
                <CornerDownLeft className="h-4 w-4 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
