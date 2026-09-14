import type { CollectionEntry } from 'astro:content';

// Mirrors Jekyll's fallback title for posts without an explicit `title:`
// (e.g. dive logs, software-craftsman): humanize the slug word-by-word.
export function humanizeSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getPostTitle(entry: CollectionEntry<'posts'>): string {
  return entry.data.title ?? humanizeSlug(entry.data.slug);
}
