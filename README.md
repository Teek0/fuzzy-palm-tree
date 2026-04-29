# Sitio web para contadora en Santiago, Chile

Landing page rápida en Astro para una contadora independiente, optimizada para SEO local y conversiones por WhatsApp. Usa Tailwind CSS, TypeScript, Sanity CMS para el blog y Netlify para hosting estático.

## Estructura de archivos

```text
.
├─ astro.config.mjs
├─ netlify.toml
├─ package.json
├─ tailwind.config.mjs
├─ tsconfig.json
├─ .env.example
├─ sanity/
│  ├─ sanity.config.ts
│  └─ schemas/
│     ├─ index.ts
│     └─ post.ts
└─ src/
   ├─ assets/
   ├─ components/
   ├─ content/site.ts
   ├─ layouts/BaseLayout.astro
   ├─ lib/
   ├─ pages/
   │  ├─ index.astro
   │  ├─ services.astro
   │  ├─ about.astro
   │  ├─ contact.astro
   │  ├─ blog/
   │  ├─ robots.txt.ts
   │  └─ sitemap.xml.ts
   └─ styles/global.css
```

## Instalación

```bash
npm install
cp .env.example .env
npm run dev
```

Actualiza `src/content/site.ts` con el nombre real, teléfono, WhatsApp, correo, ciudad, horario, servicios, preguntas frecuentes y testimonios.

## Sanity CMS

1. Create a Sanity project.
2. Set these values in `.env` and in Netlify environment variables:

```bash
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SITE_URL=https://your-domain.cl
```

3. Run the local studio:

```bash
npm run sanity:dev
```

The post schema includes `title`, `slug`, `excerpt`, `publishedAt`, `mainImage`, `body`, `seoTitle`, and `seoDescription`.

The frontend only uses public Sanity read configuration. Do not put private tokens in frontend code.

## Ejecutar localmente

```bash
npm run dev
```

Open the Astro URL printed by the terminal.

## Compilar

```bash
npm run build
npm run preview
```

## Deploy en Netlify

1. Push the repository to GitHub.
2. Create a new Netlify site from the repository.
3. Use:
   - Comando de build: `npm run build`
   - Directorio de publicación: `dist`
   - Versión de Node: `20`
4. Add environment variables in Netlify:
   - `PUBLIC_SITE_URL`
   - `PUBLIC_SANITY_PROJECT_ID`
   - `PUBLIC_SANITY_DATASET`

## Contenido de ejemplo

El blog muestra dos artículos de ejemplo hasta configurar Sanity. Elimina o edita `samplePosts` en `src/lib/sanity.ts` cuando exista contenido real en el CMS.

El retrato es un SVG de referencia en `src/assets/accountant-placeholder.svg`. Reemplázalo por una foto profesional real cuando esté disponible.

## Notas de seguridad

Este sitio no tiene backend y no recopila datos tributarios sensibles, contraseñas ni documentos. Usa WhatsApp o email solo para el primer contacto y deriva documentos confidenciales a un flujo profesional seguro.
