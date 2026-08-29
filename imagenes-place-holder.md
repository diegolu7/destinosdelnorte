# Imágenes del sitio — Referencia de medidas para placeholders

Todos los assets viven en `src/assets/`. Se listan su **tamaño fuente** (el que usa el `<Image>` / `width`/`height`) y la **proporción con la que se renderizan**, para generar placeholders idénticos.

## 1. Hero Home (carrusel) — `Hero.astro`
Sección: ancho total, proporción **1916:821**, con altura máxima 682px (el resto se recorta con `object-cover`).

| Archivo | Tamaño fuente | Proporción |
|---|---|---|
| `hero_img.png` | 1916×821 | 2.33 : 1 |
| `hero_img_cafayate.png` | 1983×793 | 2.50 : 1 |
| `hero_img_purmamarca.png` | 1915×821 | 2.33 : 1 |
| `hero_img_tafi_del_valle.png` | 1916×821 | 2.33 : 1 |

**Placeholder recomendado:** 1916×821 (o 1920×823 para respetar 2.33:1).

## 2. Qué hacer — `ProvinceCard.astro`
Desktop: proporción **4:3** (`aspect-[4/3]`). Mobile: fila de 112px de alto (usa `object-bottom`).

| Archivo | Tamaño fuente | Proporción |
|---|---|---|
| `salta_que_hacer_card.png` | 1448×1086 | 4:3 (1.33) |
| `jujuy_que_hacer_card.png` | 1448×1086 | 4:3 (1.33) |
| `tucuman_que_hacer_card.png` | 1448×1086 | 4:3 (1.33) |

**Placeholder:** 1448×1086.

## 3. Destinos imperdibles / cercanos / otros — `DestinationCard.astro`
Render: **4:5** (crop vertical). Se reutiliza en Home, provincias y destinos cercanos.

| Archivo | Tamaño fuente | Proporción |
|---|---|---|
| `seccion_atractivo_cafayate.png` | 487×453 | ~1.08 |
| `seccion_atractivo_cerro_7_colores.png` | 489×452 | ~1.08 |
| `seccion_atractivo_purmamarca.png` | 486×437 | ~1.11 |
| `seccion_atractivo_tafi_del_valle.png` | 488×450 | ~1.08 |
| `seccion_atractivo_tilcara.png` | 486×437 | ~1.11 |
| `seccion_atractivo_amicha.png` | 488×437 | ~1.12 |

**Placeholder:** 487×450 aprox. (Si se quiere una versión más grande nítida, 976×900 — el doble — manteniendo ~1.08).

## 4. Hero de destino — `DestinationHero.astro`
Renderiza la misma imagen del destino (`seccion_atractivo_*`) a **640×591** (proporción ~1.08). Como el source es ~487px, queda ligeramente upscaleada.

**Placeholder recomendado (dedicado):** 1280×1182 (~1.08:1) para nitidez.

## 5. Logos

| Archivo | Tamaño fuente | Uso |
|---|---|---|
| `logo_destinos_del_norte.png` | 1283×426 | Header + favicon (3.01:1) |
| `logo_destinos_del_norte_footer.png` | 2170×725 | Footer (2.99:1) |

---

**Nota:** los archivos de la raíz (`hero_img.png`, cards, `seccion_atractivo_*`, logos) están en `.gitignore`; los que realmente se usan están copiados en `src/assets/`. Si generás placeholders, reemplazá los PNG en `src/assets/` manteniendo el **mismo nombre** y la misma proporción para no romper el layout ni causar CLS.
