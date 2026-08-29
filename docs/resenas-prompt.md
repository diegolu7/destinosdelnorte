Quiero que busques y verifiques reseñas públicas recientes de Google Maps o fuentes públicas confiables que reproduzcan reseñas de Google para los siguientes destinos turísticos del norte argentino.

Necesito **hasta 5 reseñas por destino**, priorizando las **más recientes disponibles**.

## Destinos y slugs

- Cafayate → `cafayate`
- Cachi → `cachi`
- Quebrada de las Conchas → `quebrada-de-las-conchas`
- Tren a las Nubes → `tren-a-las-nubes`
- Purmamarca → `purmamarca`
- Tilcara → `tilcara`
- Humahuaca → `humahuaca`
- Salinas Grandes → `salinas-grandes`
- Hornocal → `hornocal`
- Tafí del Valle → `tafi-del-valle`
- Amaicha del Valle → `amaicha-del-valle`
- Ruinas de Quilmes → `ruinas-de-quilmes`
- El Cadillal → `el-cadillal`

## Investigación

Para cada destino:

1. Buscá la ficha correcta del atractivo o destino turístico.

2. Priorizá **Google Maps** como fuente principal.

3. Si Google Maps no permite acceder directamente a las reseñas, podés usar fuentes públicas confiables que reproduzcan reseñas de Google, especialmente **Wanderlog**, u otra fuente verificable.

4. Obtené hasta **5 reseñas recientes y verificables**.

5. Incluí únicamente reseñas con una valoración de **4 o 5 estrellas**.

6. Descartá completamente las reseñas de **1, 2 o 3 estrellas**.

7. Priorizá primero las reseñas más recientes que cumplan el requisito de tener **4 estrellas o más**.

8. No inventes autores, fechas, valoraciones, textos, fuentes ni URLs.

9. Si no podés verificar 5 reseñas válidas, incluí únicamente las que puedas verificar.

10. No confundas reseñas de hoteles, restaurantes, agencias, excursiones, comercios u otros establecimientos con las reseñas del destino turístico solicitado.

11. Cuando exista fecha, convertíla al formato `YYYY-MM-DD`.

12. La valoración debe ser un número entero de `4` o `5`.

13. El texto debe conservar fielmente el significado de la reseña original.

14. Si la reseña es muy extensa, acortala a una o dos frases representativas, sin inventar información ni cambiar su sentido.

15. Si la reseña original está escrita en **inglés, portugués u otro idioma**, traducila al **español** manteniendo fielmente su significado.

16. El campo `texto` del JSON final debe quedar **siempre en español**.

17. Si el texto original ya está en español, mantenelo en español y realizá únicamente correcciones mínimas de formato si fueran necesarias. No reescribas innecesariamente la opinión del usuario.

## Fuente de las reseñas

Para cada destino debés registrar también **de dónde fueron obtenidas las reseñas**.

Cada destino debe tener estos dos campos adicionales:

- `fuente_resenas`: nombre de la plataforma o fuente utilizada.
- `url_fuente_resenas`: URL exacta de la ficha o página desde donde se obtuvieron las reseñas.

Valores esperados para `fuente_resenas`:

- `"Google Maps"` → si las reseñas fueron obtenidas directamente de la ficha de Google Maps.
- `"Wanderlog"` → si fueron obtenidas desde una página de Wanderlog que reproduce reseñas de Google.
- Si excepcionalmente utilizás otra fuente confiable, colocá el nombre real de esa fuente.

### Reglas de la fuente

1. Usá preferentemente **una única fuente por destino**.

2. Las hasta 5 reseñas de un destino deben provenir, siempre que sea posible, de la misma ficha/página indicada en `url_fuente_resenas`.

3. `url_fuente_resenas` debe ser una URL real, verificable y correspondiente específicamente al destino.

4. No uses la página principal de Google, Wanderlog u otro sitio. Debe ser la URL específica del destino o atractivo.

5. No inventes ni reconstruyas URLs.

6. No agregues la URL dentro de cada reseña individual.

7. La fuente se registra **una sola vez por destino**.

8. Si las reseñas visibles en Wanderlog indican que provienen de Google, el campo debe seguir indicando:

```json
"fuente_resenas": "Wanderlog"
```

porque esa fue la página concreta utilizada para extraer y verificar la información.

## Salida requerida

Devolvé **UN SOLO JSON válido**, agrupado por slug.

La estructura debe ser exactamente:

```json
{
  "cafayate": {
    "destino": "cafayate",
    "fuente_resenas": "Google Maps",
    "url_fuente_resenas": "https://www.google.com/maps/...",
    "resenas": [
      {
        "autor": "Nombre",
        "fecha": "2026-08-10",
        "valoracion": 5,
        "texto": "Texto de la reseña en español."
      }
    ]
  },

  "cachi": {
    "destino": "cachi",
    "fuente_resenas": "Wanderlog",
    "url_fuente_resenas": "https://wanderlog.com/...",
    "resenas": [
      {
        "autor": "Nombre",
        "fecha": "2026-07-20",
        "valoracion": 4,
        "texto": "Texto de la reseña en español."
      }
    ]
  }
}
```

## Reglas del JSON

- La clave principal debe ser siempre el slug del destino.
- `destino` debe contener exactamente el mismo slug.
- `fuente_resenas` es obligatorio.
- `url_fuente_resenas` es obligatorio.
- `url_fuente_resenas` debe corresponder a la página real desde donde fueron verificadas las reseñas.
- `resenas` debe contener como máximo 5 elementos.
- `autor` es obligatorio.
- `valoracion` es obligatoria y debe ser únicamente `4` o `5`.
- `texto` es obligatorio.
- Todo el contenido de `texto` debe estar en español.
- Si la reseña original está en otro idioma, traducila al español.
- `fecha` es opcional: si no se puede verificar, omití completamente el campo.
- No agregues URLs dentro de cada reseña.
- No agregues campos adicionales.
- No uses comentarios dentro del JSON.
- No uses valores `null`.
- No inventes información para completar cinco reseñas.
- No incluyas reseñas de menos de 4 estrellas.
- No incluyas reseñas sin texto.
- Mantené las reseñas ordenadas de la más reciente a la más antigua siempre que las fechas estén disponibles.

## Importante

Antes de generar el JSON, verificá que cada reseña corresponda realmente al destino indicado.

Si encontrás varias fichas con nombres similares, usá la que corresponda al atractivo turístico de **Salta, Jujuy o Tucumán**, según corresponda.

La prioridad de selección debe ser:

1. Corresponde realmente al destino.
2. Tiene valoración de 4 o 5 estrellas.
3. Es verificable.
4. Es lo más reciente posible.
5. Tiene texto útil y representativo para un visitante.
6. Proviene de una fuente cuya URL puede verificarse.

Si una reseña tiene 4 o 5 estrellas pero no contiene texto, no la incluyas. Buscá otra reseña reciente que sí tenga contenido escrito.

Si Google Maps no permite verificar correctamente las reseñas pero Wanderlog sí muestra las reseñas correspondientes al destino, utilizá Wanderlog y registrá:

```json
"fuente_resenas": "Wanderlog",
"url_fuente_resenas": "URL exacta de la página del destino en Wanderlog"
```

No afirmes que una fuente es Google Maps si la información fue realmente extraída desde Wanderlog.

El resultado final debe contener **únicamente JSON válido**, sin explicaciones, encabezados, Markdown, citas ni texto antes o después.
