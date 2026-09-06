# Destinos del Norte

Sitio turístico estático del **Noroeste Argentino** (Salta, Jujuy y Tucumán), construido con **Astro + TypeScript + Tailwind CSS v4**, desplegado en **GitHub Pages** bajo el dominio propio `https://destinosdelnorte.ar`.

## Stack y comandos

- **Framework**: Astro (generación estática). **Estilos**: Tailwind CSS v4. **Contenido**: Astro Content Collections (`src/content/*`).
- Comandos:
  - `npm run dev` — servidor local de desarrollo.
  - `npm run build` — build estático a `dist/`.
  - `npm run preview` — sirve el build localmente.
  - `npm run check` — chequeo de tipos/Astro (`astro check`).
  - `npm run i18n:structure` — **harness de paridad** (ver sección i18n).

## Arquitectura de contenido e i18n

- **español (es)** vive en la raíz y es la **fuente de verdad** de estructura, estilos y contenido.
- **english (en)** y **português (pt)** viven bajo `/en/` y `/pt/`.
- Cada idioma usa **colecciones propias** por carpeta (`provincias`, `provincias-en`, `provincias-pt`, igual para `destinos`, `guias`, `rutas`, `blog`, `faqs`, `experiencias`). Esto evita la colisión del campo `slug`/`id` reservado de Astro.
- Textos de "chrome" (nav, footer, UI, forms, reseñas por idioma) se localizan con diccionarios por idioma; los nombres/descripciones de contenido viven en las colecciones de cada idioma.
- Documento de seguimiento con pendientes y decisiones: `pendientes.md` (incluye la propuesta de producto para monetización por donaciones).

### Paridad de estructura ES ↔ EN ↔ PT

El **harness `npm run i18n:structure`** compara el esqueleto DOM (tags + clases) de cada página `es` contra su espejo `en`/`pt` y **falla si hay divergencia**. Con esto **español queda garantizado como fuente de verdad** de estructura/orden/estilos; cualquier cambio de plantillas debe mantener 0 divergencias.

## Cómo se estructuran las páginas

- Páginas espejo: cada página bajo `src/pages/` tiene su versión en `src/pages/en/` y `src/pages/pt/` con la misma estructura.
- Componentes compartidos ricos (hero, buscador, cards de destino/experiencia, guías, reseñas, mapa, etc.) viven en `src/components/` y muchos derivan el idioma de la URL (`langFromPath`), por lo que se reutilizan en los 3 idiomas con el mismo markup.
- Datos de reseñas por idioma: `src/data/resenas.json` (es), `resenas-en.json`, `resenas-pt.json`.

---

## Registro de trabajo — 05/09/2026 (internacionalización y UI)

Trabajo principal de la fecha: **sitio trilingüe (es/en/pt) con español como fuente de verdad**.

- **i18n completo en contenido**: Home, 3 provincias, 13 destinos, 26 guías, 4 rutas, 5 posts de blog, 11 FAQ, sobre nosotros, contacto, política de privacidad y búsqueda traducidos a EN y PT.
- **Paridad de estructura/estilos** (ES = golden): se alinearon Home, provincias, destinos (10 bloques en el mismo orden), guías y FAQ; se creó el harness `check-i18n-structure.mjs` → **0 divergencias**.
- **Chrome i18n**: aria-labels, `meta language`/`og:locale`, JSON-LD `inLanguage` y breadcrumb "Inicio", copyright y formularios localizados.
- **Reseñas por idioma**: `resenas-en.json` y `resenas-pt.json` (62 reseñas c/u).
- **Hero**: se agregó un scrim `#061B49` (mobile degradado hasta ~50% y lateral; desktop degradado horizontal con cola suave), **texto blanco** sin text-shadows, y el contenido en mobile subido ~85px.
- **Fix newsletter (footer)**: input y botón con la misma altura (borde y `items-stretch` en el contenedor).
- **Home "Experiencias"**: cards enriquecidas — ahora muestran descripción, **2 destinos-ejemplo reales (enlaces)** y el **indicador territorial** (provincias), con grilla responsive. `ExperienceCard` es backward-compatible (en las páginas de destino queda igual).
- **Docs**: propuesta de líder de producto para monetización por donaciones (PayPal/Mercado Pago) en `pendientes.md`.

Nota de despliegue: GitHub Pages publica automáticamente desde `main`; mantener `main` al día (`git push`) y correr `npm run i18n:structure` + `npm run check` antes de cada release de plantillas.
