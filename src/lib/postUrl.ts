import type { CollectionEntry } from 'astro:content';

// Reproduces the pre-migration Jekyll permalink:
// /:section/:year/:month/:day/:slug.html - or, for the one post with no
// category in its original front matter, /:year/:month/:day/:slug.html
// (Jekyll's permalink just omits an empty :categories segment).
export function getPostUrl(entry: CollectionEntry<'posts'>): string {
  const { date, section, slug } = entry.data;
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const prefix = section ? `/${section}` : '';
  return `${prefix}/${year}/${month}/${day}/${slug}.html`;
}
