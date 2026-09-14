import type { CollectionEntry } from 'astro:content';

// Matches Jekyll's ordering for site.posts: newest date first, and for
// same-date posts, descending by slug (Jekyll breaks ties ascending by file
// path, then reverses the whole list to get newest-first).
export function sortPosts(a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>): number {
  const dateDiff = b.data.date.getTime() - a.data.date.getTime();
  if (dateDiff !== 0) return dateDiff;
  return b.data.slug.localeCompare(a.data.slug);
}
