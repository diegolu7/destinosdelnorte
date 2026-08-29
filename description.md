# Destinos del Norte — Descripción del proyecto

Plataforma web turística del **Norte Argentino** (Salta, Jujuy y Tucumán). Su objetivo es ayudar a los viajeros a descubrir destinos, lugares, actividades y experiencias, con una base pensada para crecer y, en el futuro, conectar viajeros con empresas turísticas.

Sitio en vivo: `https://diegolu7.github.io/destinosdelnorte/`

## Stack
- **Astro 5 + TypeScript** (generación estática / SSG)
- **Tailwind CSS v4** (implementa el sistema visual de `design.json`)
- **@astrojs/sitemap** (sitemap-index)
- Fuentes self-hosted (Poppins + Inter)
- Deploy en **GitHub Pages** vía **GitHub Actions**

## Organización del proyecto

```
/                         raíz del proyecto
├── info.json             fuente de verdad del contenido y estructura
├── design.json           fuente de verdad del sistema visual
├── seo.json              fuente de verdad de SEO / URLs
├── tarea.md              orquestador técnico (reglas de implementación)
├── astro.config.mjs      config de Astro (site, base, sitemap)
├── package.json          dependencias y scripts
├── .github/workflows/    pipeline de build + deploy a GitHub Pages
├── public/               favicon.ico, robots.txt
└── src/
    ├── assets/           imágenes provistas (heroes, cards, logos)
    ├── content/          datos (Content Collections) — agregar contenido aquí
    │   ├── provincias/   Salta, Jujuy, Tucumán
    │   ├── destinos/     Cafayate, Purmamarca, Tilcara, Tafí, Amaicha
    │   └── experiencias/ Aventura, Cultura, Gastronomía, Naturaleza
    ├── content.config.ts definición/esquema de las colecciones
    ├── components/       componentes reutilizables (Header, Hero, cards, SeoHead…)
    ├── layouts/          BaseLayout (estructura + head + fuentes)
    ├── lib/              utilidades (imágenes, datos del sitio)
    ├── pages/            rutas (Home, /[provincia]/, /[provincia]/[destino]/, búsqueda)
    └── styles/           global.css (tokens del sistema de diseño)
```

## Cómo funciona (data-driven)
Las páginas se generan a partir de los datos en `src/content/`. Agregar una provincia, destino o experiencia = **crear un archivo `.md`** en la colección correspondiente; la página se genera sola. No hace falta duplicar componentes ni templates.

- Home → `src/pages/index.astro`
- Provincia → `src/pages/[provincia]/index.astro` (genera `/salta/`, `/jujuy/`, `/tucuman/`)
- Destino → `src/pages/[provincia]/[destino]/index.astro` (genera `/salta/cafayate/`, etc.)
- Búsqueda → `src/pages/busqueda.astro` (`noindex`)

## SEO manejado hasta ahora
- **URLs limpias** y jerárquicas: `/`, `/{provincia}/`, `/{provincia}/{destino}/`.
- **`SeoHead.astro`** centralizado: `title`, `meta description`, `canonical` (self-referencing), `robots`, Open Graph y Twitter Card.
- **JSON-LD**: `WebSite`, `Organization`, `BreadcrumbList` y `TouristDestination`.
- **Títulos únicos** por tipo de página (según templates de `seo.json`), siempre con el H1 estático.
- **Sitemap**: `sitemap-index.xml` automático (solo URLs indexables).
- **robots.txt** con `Disallow` para la búsqueda (`/busqueda/`).
- **Enlazado interno** (hub and spoke): provincias → destinos → provincias, destinos cercanos relacionados.
- **Performance SEO**: HTML estático (SSG), imágenes optimizadas a WebP con `width/height`, primer slide del hero prioritario (LCP), fuentes self-hosted, sin renderizado client-side del contenido principal.
- El modelo SEO (Topical Authority + Long Tail + Hub and Spoke) y las reglas completas están definidos en `seo.json`.

## Comandos
```bash
npm install      # instalar dependencias
npm run dev      # desarrollo local
npm run build    # build estático a /dist
npm run preview  # previsualizar el build
npm run check    # typecheck (astro check)
```

## Notas
- El sitio se publica con **GitHub Pages** en `diegolu7.github.io/destinosdelnorte` (`base` = `/destinosdelnorte`). Cuando se active un dominio propio (según `seo.json`, `destinosdelnorte.ar`), hay que actualizar `site`/`base` en `astro.config.mjs` y el sitemap.
- Los assets provistos en `design.json`/`tarea.md` no deben sustituirse arbitrariamente.
