import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getPostUrl } from '../lib/postUrl';
import { getPostTitle } from '../lib/postTitle';
import { sortPosts } from '../lib/sortPosts';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => data.section !== 'test-doc');

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts
      .sort(sortPosts)
      .map((post) => ({
        title: getPostTitle(post),
        description: post.data.description,
        pubDate: post.data.date,
        link: getPostUrl(post),
      })),
  });
}
