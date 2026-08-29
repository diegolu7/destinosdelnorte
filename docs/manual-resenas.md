# Manual — Carga de reseñas (Reseñas de Google)

Este manual explica cómo actualizar las **reseñas de visitantes** que se muestran en las páginas de destino de **Destinos del Norte**.

Las reseñas se cargan de forma **manual y data-driven en JSON**: se toma captura de las reseñas de Google, se usa una IA para generar la estructura lista para insertar, y se renuevan **una vez al mes**.

**No se usa la API de Google ni se gasta dinero.**

---

## 1. Flujo mensual (resumen)

```text
1. Tomar captura de las 5 reseñas de Google de cada destino
2. Pegar la captura a la IA con el prompt del punto 4
3. Copiar el JSON generado en src/content/resenas/<destino>.json
4. Revisar que el `destino` (slug) sea el correcto
5. Ejecutar: npm run build
6. Commit + push (GitHub Actions re-despliega solo)
```

La actualización se hace **una vez al mes**. Si un destino no tiene archivo JSON, su página muestra solo el botón **"Ver reseñas en Google"**.

---

## 2. Dónde se guardan las reseñas

Cada destino tiene **un archivo JSON** con sus reseñas en un arreglo:

```text
src/content/resenas/<destino>.json
```

Ejemplo:

```text
src/content/resenas/ruinas-de-quilmes.json
```

Se cargan **hasta 5 reseñas por destino**. Si hay menos, se cargan las que existan.

---

## 3. Estructura del archivo JSON

```json
{
  "destino": "ruinas-de-quilmes",
  "resenas": [
    { "autor": "María G.", "fecha": "2026-07-10", "valoracion": 5, "texto": "..." },
    { "autor": "Juan P.", "valoracion": 4, "texto": "..." },
    { "autor": "Ana L.", "fecha": "2026-06-20", "valoracion": 5, "texto": "..." },
    { "autor": "Pedro R.", "valoracion": 5, "texto": "..." },
    { "autor": "Sofía M.", "fecha": "2026-05-30", "valoracion": 4, "texto": "..." }
  ]
}
```

**Reglas:**
- `destino`: **siempre el slug** en minúsculas con guiones (ver lista en el punto 5).
- Cada reseña:
  - `autor`: nombre del autor.
  - `valoracion`: número entero de **1 a 5**.
  - `texto`: el texto real de la reseña (sin modificarlo ni inventarlo).
  - `fecha`: solo si la reseña la tiene, con formato `YYYY-MM-DD`. Si no, **se omite la línea**.
- `resenas`: arreglo de hasta 5 reseñas.
- Omitir un campo opcional (como `fecha`) deja el JSON válido.

---

## 4. Prompt para la IA

Cuando tengas la captura (o el texto copiado) de las 5 reseñas, usá este prompt:

````text
Te paso las últimas reseñas de Google de un destino turístico del Norte Argentino.
Cada reseña tiene: nombre del autor, puntaje (1-5), fecha (opcional) y texto.

Generá un único archivo JSON con exactamente esta estructura:

{
  "destino": "<SLUG_DEL_DESTINO>",
  "resenas": [
    { "autor": "<NOMBRE_DEL_AUTOR>", "valoracion": <1-5>, "texto": "<Texto de la reseña tal cual>" }
  ]
}

Reglas:
- El destino al que pertenecen es: <NOMBRE_DEL_DESTINO> → slug "<SLUG_DEL_DESTINO>".
- Incluí las 5 reseñas en el arreglo `resenas` (o las que haya).
- Si una reseña tiene fecha, agregá el campo `"fecha": "<YYYY-MM-DD>"`.
- Si NO tiene fecha, omití el campo `fecha` en esa reseña.
- No inventes ni modifiques el texto de las reseñas.
- Respetá el formato JSON válido (sin comentarios).
````

> Reemplazá `<SLUG_DEL_DESTINO>` y `<NOMBRE_DEL_DESTINO>` con el destino correspondiente (ver lista del punto 5).

Luego **copiá el JSON** generado en `src/content/resenas/<destino>.json` (reemplazando el contenido anterior si existía).

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

1. Verificá que el JSON esté en `src/content/resenas/<destino>.json` con el slug correcto.
2. Ejecutá la compilación:

```bash
npm run build
```

3. Si no hay errores, hacé el commit y push. GitHub Actions re-despliega el sitio automáticamente.

---

## 7. Comportamiento si no hay reseñas

- Si un destino **tiene un JSON con al menos 1 reseña** → se muestra la sección **"Reseñas"** con esas reseñas.
- Si un destino **no tiene archivo JSON** → NO se muestra la lista; la página muestra solo el botón **"Ver reseñas en Google"** (que abre el perfil/mapa del lugar).

Esto es automático según los archivos que existan en `src/content/resenas/`.
