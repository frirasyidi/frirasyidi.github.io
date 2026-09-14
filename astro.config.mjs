import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://frirasyidi.com',
  build: {
    // Keeps folder/index.astro pages as folder/index.html (so /about/,
    // /writings/, /reading-takeaways/ keep their directory-style URLs) while
    // flat page files - including the dynamic post route below - build as
    // flat *.html files instead of being wrapped in a same-named directory.
    // This is what lets post URLs keep their literal .html suffix
    // (e.g. /writings/2024/01/04/slug.html) matching the pre-migration
    // Jekyll permalinks, without depending on a host's directory-redirect
    // behavior (which astro dev/preview don't replicate locally).
    format: 'preserve',
  },
});
