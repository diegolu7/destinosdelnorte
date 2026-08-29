# ÉPICA 3 — Consolidar Destinos del Norte como autoridad del Norte Argentino

## Proyecto: Destinos del Norte

> **Objetivo:** pasar de un catálogo de destinos a una **autoridad temática** del Norte Argentino, fortaleciendo contenido (guías, itinerarios, blog), SEO/GEO y preparando la medición de visitas. Se trabaja sobre la arquitectura data-driven existente; **no se reconstruye nada**.

---

## Fases

### Fase 1 — Guías completas de los 13 destinos + guía general del Norte
- Completar las guías de **"Cómo llegar"** y **"Mejor época"** para cada uno de los 13 destinos (colección `guias` existente).
- Crear una **guía general del Norte Argentino** (cómo llegar, mejor época, transporte de la región).
- Reutilizar `src/content/guias/` y sus rutas `/provincia/destino/guia/`. Evitar canibalización con la landing de cada destino.

### Fase 2 — Itinerarios / Rutas
- Nueva colección **`rutas`** con itinerarios regionales.
- Páginas: listado **`/rutas/`** + detalle **`/rutas/{slug}/`**.
- Itinerarios iniciales: "Norte Argentino en 7 días", "Salta y Jujuy en 5 días", "Valles Calchaquíes", "Tucumán en 4 días".
- Reactivar el nav **"Rutas"** → `/rutas/`.

### Fase 3 — Blog / artículos (GEO)
- Nueva colección **`blog`** con artículos.
- Páginas: listado **`/blog/`** + detalle **`/blog/{slug}/`**. Nav "Blog" → `/blog/`.
- Notas de **atractivos gratuitos** del Norte (solo ir, sin gastar): Cerro Elefante (Salta), Cerro de la Virgen (Salta), Cerro San Javier (Tucumán).
- Artículo **"Atractivos gratuitos en Salta"** compilando estos lugares.
- JSON-LD `Article`, contenido original, enlazado a destinos cercanos.

### Fase 4 — Analítica (GA4) — EVOLUTIVO
- **Pausada**: se implementará cuando esté disponible el **Measurement ID** (G-XXXXXXXXXX). Se agregará el gtag con `async`/`defer` en `BaseLayout` y se evaluará el aviso de consentimiento.

### Fase 5 — Dominio propio — EVOLUTIVO
- `destinosdelnorte.ar` en trámite. Por ahora se sigue usando **GitHub Pages + local**. Cuando el dominio esté activo, se ajusta `site`/`base` en `astro.config.mjs` (base → "/") y el sitemap.

---

## Fuentes de verdad
- `./tarea.md` (arquitectura técnica)
- `./design.json` (sistema visual)
- `./seo.json` (SEO / URLs)
- `./info.json` (contenido de la Home)
- Este documento (alcance de la Épica 3)

## Validaciones obligatorias
```bash
npm run check
npm run build
```
Ambos deben finalizar sin errores. Verificar: links internos, sitemap, 1 H1 por página, JSON-LD, responsive.

## Orden de ejecución
Fase 1 → Fase 2 → Fase 3. (Fases 4 y 5 quedan como evolutivos.)
