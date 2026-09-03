export {
  siteConfig,
  categories,
  type Category,
  type FaqItem,
  type PromptVariation,
  type LegalSection,
  type PageData,
  sharedTips,
  sharedBestPractices,
  sharedMistakes,
  sharedFaqs,
  homeFaqs,
} from './types';

export { getCategory } from './types';

import { existingPages } from './existingPages';
import { existingPages2 } from './existingPages2';
import { newPages } from './newPages';
import { legalAndAboutPages } from './legalPages';
import type { PageData } from './types';

export const pages: PageData[] = [
  ...existingPages,
  ...existingPages2,
  ...newPages,
  ...legalAndAboutPages,
];

export function getPage(slug: string): PageData | undefined {
  return pages.find((p) => p.slug === slug);
}

export function getPagesByCategory(categorySlug: string): PageData[] {
  return pages.filter((p) => p.category === categorySlug);
}

export const allRoutes = ['/', ...pages.map((p) => p.path)];
