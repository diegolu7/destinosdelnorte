# Manual — Carga de reseñas (Reseñas de Google)

Este manual explica cómo actualizar las **reseñas de visitantes** que se muestran en las páginas de destino de **Destinos del Norte**.

Las reseñas se cargan de forma **manual y data-driven**: se toma captura de las reseñas de Google, se usa una IA para generar la estructura lista para insertar, y se renuevan **una vez al mes**.

**No se usa la API de Google ni se gasta dinero.**

---

## 1. Flujo mensual (resumen)

```text
1. Tomar captura de las 5 reseñas de Google de cada destino
2. Pegar la captura a la IA con el prompt del punto 4
3. Copiar los archivos .md generados en src/content/resenas/
4. Revisar que el `destino` (slug) sea el correcto
5. Ejecutar: npm run build
6. Commit + push (GitHub Actions re-despliega solo)
```

La actualización se hace **una vez al mes**. Si un destino no tiene reseñas cargadas, su página muestra solo el botón **"Ver reseñas en Google"**.

---

## 2. Dónde se guardan las reseñas

Cada reseña es un archivo Markdown en:

```text
src/content/resenas/<destino>-<número>.md
```

Ejemplos:

```text
src/content/resenas/ruinas-de-quilmes-1.md
src/content/resenas/ruinas-de-quilmes-2.md
src/content/resenas/ruinas-de-quilmes-3.md
src/content/resenas/ruinas-de-quilmes-4.md
src/content/resenas/ruinas-de-quilmes-5.md
```

Se cargan **hasta 5 reseñas por destino**. Si hay menos, se cargan las que existan.

---

## 3. Estructura de un archivo de reseña

Cada archivo `.md` usa este formato (frontmatter YAML + texto como cuerpo):

````markdown
---
destino: "ruinas-de-quilmes"   # slug del destino (ver lista en el punto 5)
autor: "María G."
fecha: 2026-07-10              # opcional; si no se conoce, quitar la línea
valoracion: 5                  # número entero de 1 a 5
origen: "Google"
---

Texto de la reseña tal como aparece en Google.
````

**Reglas:**
- `destino`: **siempre el slug** en minúsculas con guiones (ver lista en el punto 5).
- `valoracion`: número entero de **1 a 5**.
- `origen`: siempre `"Google"`.
- El cuerpo: el texto real de la reseña (sin comillas inventadas, sin editar el contenido del autor).
- `fecha`: solo si la reseña la tiene; si no, **se omite la línea**.

---

## 4. Prompt para la IA

Cuando tengas la captura (o el texto copiado) de las 5 reseñas, usá este prompt:

````text
Te paso las últimas reseñas de Google de un destino turístico del Norte Argentino.
Cada reseña tiene: nombre del autor, puntaje (1-5), fecha (opcional) y texto.

Generá para cada reseña un archivo Markdown con frontmatter YAML exactamente con este formato:

---
destino: "<SLUG_DEL_DESTINO>"
autor: "<NOMBRE_DEL_AUTOR>"
valoracion: <1-5>
origen: "Google"
---

<Texto de la reseña tal cual, sin modificarlo>

Reglas:
- El destino al que pertenecen es: <NOMBRE_DEL_DESTINO> → slug "<SLUG_DEL_DESTINO>".
- Si una reseña tiene fecha, agregá la línea `fecha: <YYYY-MM-DD>`.
- Si NO tiene fecha, omití esa línea.
- No inventes ni modifiques el texto de las reseñas.
- Devolvé los 5 archivos separados entre sí por una línea con ---
- Nombralos: <SLUG_DEL_DESTINO>-1.md, <SLUG_DEL_DESTINO>-2.md, ..., <SLUG_DEL_DESTINO>-5.md
````

> Reemplazá `<SLUG_DEL_DESTINO>` y `<NOMBRE_DEL_DESTINO>` con el destino correspondiente (ver lista del punto 5).

Luego **copiá cada archivo** generado en `src/content/resenas/` con su nombre.

---

## 5. Slugs de destinos

| Destino | Slug (`destino`) |
|---|---|
| Cafayate | `cafayate` |
| Cachi | `cachi` |
| Quebrada de las Conchas | `quebrada-de-las-conchas` |
| Tren a las Nubes | `tren-a-las-nubes` |
| Purmamarca | `purmamarca` |
| Tilcara | `tilcara` |
| Humahuaca | `humahuaca` |
| Salinas Grandes | `salinas-grandes` |
| Hornocal | `hornocal` |
| Tafí del Valle | `tafi-del-valle` |
| Amaicha del Valle | `amaicha-del-valle` |
| Ruinas de Quilmes | `ruinas-de-quilmes` |
| El Cadillal | `el-cadillal` |

---

## 6. Verificación y publicación

Antes de publicar:

1. Verificá que cada archivo esté en `src/content/resenas/` con el slug correcto.
2. Ejecutá la compilación:

```bash
npm run build
```

3. Si no hay errores, hacé el commit y push. GitHub Actions re-despliega el sitio automáticamente.

---

## 7. Comportamiento si no hay reseñas

- Si un destino **tiene al menos 1 reseña** cargada → se muestra la sección **"Reseñas"** con las reseñas cargadas.
- Si un destino **no tiene ninguna reseña** → NO se muestra la lista; la página muestra solo el botón **"Ver reseñas en Google"** (que abre el perfil/mapa del lugar).

Esto es automático según los archivos que existan en `src/content/resenas/`.
