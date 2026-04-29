import type { APIRoute } from 'astro';
import { business } from '@/content/site';

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /

Sitemap: ${business.siteUrl}/sitemap.xml
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    }
  );
