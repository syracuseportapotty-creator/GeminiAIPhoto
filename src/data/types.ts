export const siteConfig = {
  name: 'Gemini AI Photo Prompt',
  url: 'https://gemini-ai-photo-prompts.vercel.app',
  description:
    'Create realistic AI photo edits using Gemini prompts for boys, girls, couples, professional portraits, festivals and trending styles.',
  twitter: '@geminiphotoprompt',
};

export type Category = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  iconName: 'boys' | 'girls' | 'couples' | 'trending' | 'professional' | 'festivals';
};

export type FaqItem = { question: string; answer: string };

export type PromptVariation = { label: string; text: string };

export type LegalSection = { heading: string; paragraphs: string[] };

export type PageData = {
  slug: string;
  path: string;
  category: string | null;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  primaryKeyword: string;
  keywords: string[];
  prompt: string;
  prompts: PromptVariation[];
  variations: PromptVariation[];
  tips: string[];
  bestPractices: string[];
  commonMistakes: string[];
  faqs: FaqItem[];
  related: string[];
  imageAlt: string;
  previewAlts: string[];
  pageType: 'prompt' | 'legal' | 'about';
  legalSections?: LegalSection[];
};

export const categories: Category[] = [
  {
    slug: 'boys',
    title: 'Boys',
    shortTitle: 'Boys',
    description: 'Trending Gemini AI photo prompts for boys — stylish, professional, and casual looks.',
    iconName: 'boys',
  },
  {
    slug: 'girls',
    title: 'Girls',
    shortTitle: 'Girls',
    description: 'Beautiful Gemini AI photo prompts for girls — portraits, fantasy, and aesthetic styles.',
    iconName: 'girls',
  },
  {
    slug: 'couples',
    title: 'Couples',
    shortTitle: 'Couples',
    description: 'Romantic Gemini AI couple photo prompts for pre-wedding, cinematic, and dreamy edits.',
    iconName: 'couples',
  },
  {
    slug: 'trending',
    title: 'Trending',
    shortTitle: 'Trending',
    description: 'The latest trending Gemini AI photo prompts everyone is copying right now.',
    iconName: 'trending',
  },
  {
    slug: 'professional',
    title: 'Professional',
    shortTitle: 'Professional',
    description: 'Formal, passport-style, and corporate Gemini AI photo prompts for professional use.',
    iconName: 'professional',
  },
  {
    slug: 'festivals',
    title: 'Festivals',
    shortTitle: 'Festivals',
    description: 'Seasonal Gemini AI photo prompts for Halloween, Christmas, Diwali, and more.',
    iconName: 'festivals',
  },
];

// Shared content blocks reused across pages

export const sharedTips: string[] = [
  'Replace [describe your photo] with a clear description of the person, clothing, and background you want.',
  'Keep the prompt under 300 words — Gemini responds best to focused, specific instructions.',
  'Mention lighting, camera angle, and mood explicitly for more realistic results.',
  'Add a style reference (e.g. "cinematic", "polaroid", "studio portrait") to control the final look.',
];

export const sharedBestPractices: string[] = [
  'Start every prompt with a clear subject description before adding style instructions.',
  'Use photography terminology (50mm, shallow depth of field, rim light) for more professional results.',
  'Specify the output quality — adding "4K" or "print-ready" produces sharper, more detailed images.',
  'Keep face instructions explicit: "keep face natural and recognizable" prevents unwanted distortion.',
  'Test one style per prompt. Mixing too many visual directions confuses the AI and produces inconsistent output.',
];

export const sharedMistakes: string[] = [
  'Using vague descriptions like "make it look nice" instead of specific lighting and style instructions.',
  'Overloading a single prompt with contradictory styles (e.g. "vintage and modern at the same time").',
  'Forgetting to specify lighting — without it, Gemini defaults to flat, unflattering illumination.',
  'Skipping the quality instruction, which often results in lower-resolution, softer output.',
  'Not describing the background, leaving Gemini to fill in random or distracting elements.',
];

export const sharedFaqs: FaqItem[] = [
  {
    question: 'How do I use a Gemini AI photo prompt?',
    answer:
      'Copy the prompt from the box above, paste it into Google Gemini, and attach or describe your photo. Gemini will generate an edited image based on your instructions.',
  },
  {
    question: 'Are these Gemini AI photo prompts free?',
    answer:
      'Yes. Every prompt on Gemini AI Photo Prompt is free to copy and use for personal and commercial projects.',
  },
  {
    question: 'Do I need to edit the prompt before using it?',
    answer:
      'The prompts work as-is, but replacing the bracketed placeholders like [describe your photo] with your own details will give you more accurate results.',
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: 'What is a Gemini AI photo prompt?',
    answer:
      'A Gemini AI photo prompt is a text instruction you paste into Google Gemini to generate or edit a photo. A good prompt describes the subject, lighting, background, style, and quality you want.',
  },
  {
    question: 'Are these Gemini AI photo prompts free?',
    answer:
      'Yes. Every prompt on Gemini AI Photo Prompt is free to copy and use for personal and commercial projects.',
  },
  {
    question: 'Do I need to install anything to use these prompts?',
    answer:
      'No. Copy a prompt, paste it into Google Gemini in your browser, and describe or attach your photo.',
  },
  {
    question: 'Which Gemini AI photo prompt is best for beginners?',
    answer:
      'The copy-paste prompts are the best starting point — they work as-is and need no editing. Start with the Gemini AI Photo Prompt Copy Paste page.',
  },
  {
    question: 'Can I use these prompts for commercial projects?',
    answer:
      'Yes. The prompts are free to use for both personal and commercial work. Always review Google Gemini\'s output terms for your specific use case.',
  },
  {
    question: 'What makes a good Gemini AI photo prompt?',
    answer:
      'A good prompt is specific, structured, and focused. Describe your subject, then specify lighting, background, style, and output quality. Use photography terms for more realistic results.',
  },
];

export function getPage(slug: string, allPages: PageData[]): PageData | undefined {
  return allPages.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getPagesByCategory(categorySlug: string, allPages: PageData[]): PageData[] {
  return allPages.filter((p) => p.category === categorySlug);
}
