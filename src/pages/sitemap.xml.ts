import type { APIRoute } from 'astro';
import { business } from '@/content/site';
import { getPosts } from '@/lib/sanity';

export const GET: APIRoute = async () => {
  const staticPages = ['/', '/services', '/about', '/blog', '/contact'];
  const posts = await getPosts();
  const urls = [
    ...staticPages.map((path) => `${business.siteUrl}${path}`),
    ...posts.map((post) => `${business.siteUrl}/blog/${post.slug}`)
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8'
      }
    }
  );
};
