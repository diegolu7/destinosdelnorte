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

2. Priorizá Google Maps.

3. Si Google Maps no permite acceder directamente a las reseñas, podés usar fuentes públicas confiables que reproduzcan reseñas de Google, como Wanderlog u otras similares.

4. Obtené hasta **5 reseñas recientes y verificables**.

5. Incluí únicamente reseñas con una valoración de **4 o 5 estrellas**.

6. Descartá completamente las reseñas de **1, 2 o 3 estrellas**.

7. Priorizá primero las reseñas más recientes que cumplan el requisito de tener **4 estrellas o más**.

8. No inventes autores, fechas, valoraciones ni textos.

9. Si no podés verificar 5 reseñas válidas, incluí únicamente las que puedas verificar.

10. No confundas reseñas de hoteles, restaurantes, agencias, excursiones, comercios u otros establecimientos con las reseñas del destino turístico solicitado.

11. Cuando exista fecha, convertíla al formato `YYYY-MM-DD`.

12. La valoración debe ser un número entero de `4` o `5`.

13. El texto debe conservar fielmente el significado de la reseña original.

14. Si la reseña es muy extensa, acortala a una o dos frases representativas, sin inventar información ni cambiar su sentido.

15. Si la reseña original está escrita en **inglés, portugués u otro idioma**, traducila al **español** manteniendo fielmente su significado.

16. El campo `texto` del JSON final debe quedar **siempre en español**.

17. Si el texto original ya está en español, mantenelo en español y realizá únicamente correcciones mínimas de formato si fueran necesarias. No reescribas innecesariamente la opinión del usuario.

## Salida requerida

Devolvé **UN SOLO JSON válido**, agrupado por slug.

La estructura debe ser exactamente:

```json
{
  "cafayate": {
    "destino": "cafayate",
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

Si una reseña tiene 4 o 5 estrellas pero no contiene texto, no la incluyas. Buscá otra reseña reciente que sí tenga contenido escrito.

El resultado final debe contener **únicamente JSON válido**, sin explicaciones, encabezados, Markdown, fuentes ni texto antes o después.
