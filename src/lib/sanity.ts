import imageUrlBuilder from '@sanity/image-url';
import { toHTML } from '@portabletext/to-html';
import { createClient } from '@sanity/client';

export type SanityImage = {
  asset?: {
    _ref?: string;
    _type?: string;
  };
  alt?: string;
};

export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  mainImage?: SanityImage;
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
};

export const samplePosts: Post[] = [
  {
    title: 'Cómo prepararte para las obligaciones tributarias mensuales en Chile',
    slug: 'obligaciones-tributarias-mensuales-chile',
    excerpt:
      'Una lista práctica para emprendedores que quieren documentos más ordenados, menos sorpresas y mejor seguimiento contable.',
    publishedAt: '2026-01-15',
    seoTitle: 'Obligaciones tributarias mensuales en Chile',
    seoDescription:
      'Aprende cómo una pyme en Chile puede prepararse para sus obligaciones tributarias mensuales con mejor organización documental.'
  },
  {
    title: 'Qué saber antes de iniciar una empresa en Chile',
    slug: 'iniciar-empresa-chile',
    excerpt:
      'Puntos contables y tributarios clave antes de formalizar un nuevo negocio o actividad independiente.',
    publishedAt: '2026-02-10',
    seoTitle: 'Checklist contable para iniciar empresa en Chile',
    seoDescription:
      'Consideraciones contables y tributarias importantes antes de iniciar una empresa en Chile.'
  }
];

const hasSanityConfig =
  Boolean(import.meta.env.PUBLIC_SANITY_PROJECT_ID) &&
  import.meta.env.PUBLIC_SANITY_PROJECT_ID !== 'your_project_id';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'abc123',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: true
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

export function portableTextToHtml(body?: unknown[]) {
  if (!body) return '';
  return toHTML(body as Parameters<typeof toHTML>[0]);
}

export async function getPosts(): Promise<Post[]> {
  if (!hasSanityConfig) return samplePosts;

  return sanityClient.fetch<Post[]>(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      mainImage,
      seoTitle,
      seoDescription
    }
  `);
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!hasSanityConfig) {
    return samplePosts.find((post) => post.slug === slug) ?? null;
  }

  return sanityClient.fetch<Post | null>(
    `
      *[_type == "post" && slug.current == $slug][0] {
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        mainImage,
        body,
        seoTitle,
        seoDescription
      }
    `,
    { slug }
  );
}
