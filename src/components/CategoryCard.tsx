import { Link } from 'react-router-dom';
import { User, UserRound, Heart, TrendingUp, Briefcase, PartyPopper, ArrowRight } from 'lucide-react';
import type { Category } from '@/data/site';

const iconMap = {
  boys: User,
  girls: UserRound,
  couples: Heart,
  trending: TrendingUp,
  professional: Briefcase,
  festivals: PartyPopper,
};

export default function CategoryCard({ category, to }: { category: Category; to: string }) {
  const Icon = iconMap[category.iconName];
  return (
    <Link
      to={to}
      className="card-surface hover-lift group relative flex flex-col gap-3 p-6"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-600 group-hover:text-white dark:bg-accent-950 dark:text-accent-400">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-bold tracking-tight">{category.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{category.description}</p>
      <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-accent-600 dark:text-accent-400">
        Explore
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
