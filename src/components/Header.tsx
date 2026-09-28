import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Search, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { pages } from '@/data/site';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/gemini-photo-prompt-for-boys', label: 'Boys' },
  { to: '/gemini-girl-photo-prompt', label: 'Girls' },
  { to: '/gemini-couple-photo-prompt', label: 'Couples' },
  { to: '/gemini-ai-photo-prompt-trending', label: 'Trending' },
];

export default function Header({ onSearchOpen }: { onSearchOpen: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'glass border-b border-default shadow-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="container-px">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80" aria-label="Gemini AI Photo Prompt home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="hidden text-[15px] font-bold tracking-tight sm:block">Gemini AI Photo Prompt</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-accent-50 text-accent-700 dark:bg-accent-950 dark:text-accent-300'
                      : 'text-muted hover:text-[var(--text)] hover:bg-[var(--bg-subtle)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onSearchOpen}
              aria-label="Search prompts"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-default text-muted transition-all duration-300 hover:border-accent-500 hover:text-accent-600 active:scale-90 dark:hover:text-accent-400"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-default text-muted transition-all duration-300 hover:border-accent-500 hover:text-accent-600 active:scale-90 md:hidden dark:hover:text-accent-400"
            >
              {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-px flex flex-col gap-1 pb-6 pt-2" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-accent-50 text-accent-700 dark:bg-accent-950 dark:text-accent-300'
                    : 'text-muted hover:bg-[var(--bg-subtle)] hover:text-[var(--text)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-2 border-t border-default pt-2">
            <p className="px-4 py-1 text-xs font-semibold uppercase tracking-wider text-muted">All Pages</p>
            <div className="grid grid-cols-1">
              {pages.map((p) => (
                <Link
                  key={p.slug}
                  to={p.path}
                  className="rounded-xl px-4 py-2.5 text-sm text-muted transition-colors hover:bg-[var(--bg-subtle)] hover:text-[var(--text)]"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
