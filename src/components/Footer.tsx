import { Link } from 'react-router-dom';
import { Sparkles, Mail, FileText, Shield, Scale, AlertCircle } from 'lucide-react';
import { siteConfig, categories, pages } from '@/data/site';

const footerNav = [
  { to: '/about-us', label: 'About', icon: Mail },
  { to: '/contact', label: 'Contact', icon: Mail },
  { to: '/privacy-policy', label: 'Privacy Policy', icon: Shield },
  { to: '/terms-and-conditions', label: 'Terms', icon: Scale },
  { to: '/disclaimer', label: 'Disclaimer', icon: AlertCircle },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-default bg-[var(--bg-subtle)]">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-[15px] font-bold tracking-tight">Gemini AI Photo Prompt</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Free copy-paste prompts for realistic AI photo edits with Google Gemini. Boys, girls, couples, and trending styles.
            </p>
          </div>

          {/* Categories */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Categories</h3>
            <ul className="mt-4 space-y-2.5">
              {categories.map((c) => {
                const page = pages.find((p) => p.category === c.slug);
                return (
                  <li key={c.slug}>
                    <Link
                      to={page ? page.path : '/'}
                      className="text-sm text-muted transition-colors hover:text-accent-600 dark:hover:text-accent-400"
                    >
                      {c.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Popular */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Popular Prompts</h3>
            <ul className="mt-4 space-y-2.5">
              {pages.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    to={p.path}
                    className="text-sm text-muted transition-colors hover:text-accent-600 dark:hover:text-accent-400"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted transition-colors hover:text-accent-600 dark:hover:text-accent-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-default pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Not affiliated with Google. Gemini is a trademark of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
