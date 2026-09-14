import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    // `slug` reproduces the pre-migration Jekyll permalink segment (the
    // filename with its leading YYYY-MM-DD- date and .md extension
    // stripped), so existing /section/year/month/day/slug.html links keep
    // working.
    slug: z.string(),
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date(),
    // Optional: one post (software-craftsman) has no category in the
    // original front matter, which Jekyll's permalink just omits from the
    // URL entirely rather than defaulting to a section.
    section: z.enum(['writings', 'reading-takeaways', 'divelogs', 'test-doc', 'article']).optional(),
    tags: z.string().optional(),
    toc: z.boolean().optional().default(false),

    // SEO / cross-posting metadata.
    canonicalUrl: z.string().url().optional(),
    publicationNotes: z.string().optional(),

    // Editorial metadata - not currently rendered anywhere, kept for data
    // fidelity with the original front matter.
    lastUpdate: z.coerce.date().optional(),
    lastUpdateNotes: z.string().optional(),
    coAuthor: z.string().optional(),
    link: z.string().url().optional(),

    // Dive log-only fields (section: "divelogs").
    divenum: z.number().optional(),
    divecountry: z.string().optional(),
    diveloc: z.string().optional(),
    divespot: z.string().optional(),
    divedepth: z.number().optional(),
    divedur: z.number().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    toc: z.boolean().optional().default(false),
  }),
});

export const collections = { posts, pages };
