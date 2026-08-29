````md
# ÉPICA 2 — Ampliación del catálogo de destinos turísticos

## Proyecto: Destinos del Norte

> **Objetivo de la épica:** Ampliar el contenido turístico de **Destinos del Norte** incorporando los destinos prioritarios de Salta, Jujuy y Tucumán que todavía no existan en el proyecto, completando sus páginas con información útil, contenido SEO y recursos visuales.

Esta épica debe trabajar sobre la arquitectura data-driven desarrollada previamente.

**No reconstruir páginas, templates ni componentes que ya funcionen.**

---

# 1. Objetivo principal

Al finalizar esta épica, el proyecto debe cubrir como mínimo los siguientes destinos:

## Salta

- Cafayate
- Cachi
- Quebrada de las Conchas
- Tren a las Nubes

## Jujuy

- Purmamarca
- Tilcara
- Humahuaca
- Salinas Grandes
- Hornocal

## Tucumán

- Tafí del Valle
- Amaicha del Valle
- Ruinas de Quilmes
- El Cadillal

Total esperado:

```text
Salta    → 4
Jujuy    → 5
Tucumán  → 4

TOTAL    → 13 destinos
```
````

---

# 2. Auditoría previa obligatoria

Antes de crear contenido nuevo:

1. revisar `src/content/destinos/`;
2. identificar qué destinos ya existen;
3. identificar cuáles faltan;
4. verificar slugs actuales;
5. verificar relaciones con provincias;
6. revisar qué imágenes ya existen;
7. revisar los componentes y templates creados en la Épica 1;
8. verificar que no existan destinos duplicados con otro nombre o slug.

**No crear nuevamente un destino que ya exista.**

---

# 3. Destinos que actualmente deberían existir

Según el estado previo del proyecto, ya deberían encontrarse al menos:

```text
Salta
└── Cafayate

Jujuy
├── Purmamarca
└── Tilcara

Tucumán
├── Tafí del Valle
└── Amaicha del Valle
```

Por lo tanto, inicialmente se espera agregar:

## Salta

```text
Cachi
Quebrada de las Conchas
Tren a las Nubes
```

## Jujuy

```text
Humahuaca
Salinas Grandes
Hornocal
```

## Tucumán

```text
Ruinas de Quilmes
El Cadillal
```

Esto representa **8 nuevos contenidos esperados**.

Sin embargo:

> Esta lista debe confirmarse contra el repositorio real antes de realizar cambios.

Si alguno ya existe, actualizarlo o completarlo en lugar de duplicarlo.

---

# 4. Sistema visual

Toda interfaz nueva debe respetar:

```text
./design.json
```

como **fuente de verdad obligatoria del sistema visual**.

Debe mantenerse:

- identidad visual;
- colores;
- tipografías;
- botones;
- jerarquías;
- espaciados;
- comportamiento responsive;
- estilo general de Destinos del Norte.

Existe libertad para resolver la composición UX/UI de cada página.

No es obligatorio que todas las páginas tengan exactamente la misma estructura visual.

La regla es:

```text
Libertad de composición
+
Fidelidad a design.json
```

---

# 5. Libertad editorial

Existe libertad para investigar, seleccionar y organizar la información más útil para cada destino.

No depender de `info.json` para estas nuevas páginas.

`info.json` corresponde principalmente a la estructura y contenidos ya definidos para la Home.

Para los destinos de esta épica se puede definir libremente:

- introducción;
- lugares destacados;
- actividades;
- experiencias;
- información práctica;
- recomendaciones;
- cómo llegar;
- mejor época;
- duración sugerida;
- consejos;
- destinos cercanos;
- contenido editorial;
- estructura de headings.

El objetivo es construir páginas útiles para una persona que realmente esté preparando un viaje.

---

# 6. Investigación de información

Para cada destino se permite y se recomienda realizar investigación web.

Priorizar fuentes confiables como:

```text
Argentina Travel
organismos oficiales de turismo provinciales
municipios
Parques Nacionales
organismos públicos
sitios oficiales de atractivos
sitios oficiales de servicios turísticos
```

Se pueden utilizar otras fuentes confiables cuando aporten información complementaria.

---

# 7. Reglas de investigación

No copiar contenido literalmente.

La información debe:

- investigarse;
- verificarse;
- sintetizarse;
- redactarse de forma original;
- ser clara;
- ser útil para el viajero.

Evitar contenido turístico genérico generado únicamente para completar espacio.

---

# 8. Información sensible al tiempo

Tener especial cuidado con:

- precios;
- horarios;
- accesos;
- cierres;
- estado de rutas;
- tarifas;
- disponibilidad;
- regulaciones.

Si la información puede cambiar con frecuencia:

- evitar presentarla como permanente;
- preferir información conceptual;
- indicar cuando sea necesario consultar la fuente oficial.

No inventar datos.

---

# 9. Contenido mínimo de cada destino

Cada destino debería contar, cuando la información sea pertinente, con:

```text
Hero
Introducción
Qué hacer
Lugares o puntos destacados
Experiencias
Cómo llegar
Mejor época para visitar
Duración recomendada
Consejos
Destinos cercanos
Guías relacionadas
```

No forzar todas las secciones.

Ejemplo:

```text
si existe información útil
→ mostrar sección

si no aporta valor
→ omitir sección
```

---

# 10. Calidad del contenido

Cada página debe aportar suficiente información como para que el usuario pueda:

1. entender qué es el lugar;
2. saber por qué visitarlo;
3. conocer sus principales atractivos;
4. entender cómo incorporarlo a su viaje;
5. descubrir otros lugares relacionados.

Evitar páginas con solamente:

```text
imagen
+
nombre
+
dos párrafos
```

Los destinos deben convertirse progresivamente en auténticas landings turísticas.

---

# 11. Modelo data-driven

Todo el contenido nuevo debe cargarse mediante Content Collections.

Ejemplo conceptual:

```text
src/content/destinos/
```

No hardcodear contenido específico dentro de los componentes Astro.

Agregar un destino debe implicar principalmente:

```text
crear contenido
+
asociar imágenes
```

y no:

```text
crear template nuevo
+
crear componente nuevo
+
crear CSS nuevo
```

---

# 12. Slugs

Utilizar slugs claros, descriptivos y consistentes.

Ejemplos esperados:

```text
/salta/cafayate/
/salta/cachi/
/salta/quebrada-de-las-conchas/
/salta/tren-a-las-nubes/

/jujuy/purmamarca/
/jujuy/tilcara/
/jujuy/humahuaca/
/jujuy/salinas-grandes/
/jujuy/hornocal/

/tucuman/tafi-del-valle/
/tucuman/amaicha-del-valle/
/tucuman/ruinas-de-quilmes/
/tucuman/el-cadillal/
```

Antes de implementarlos, verificar las convenciones existentes del proyecto.

No modificar URLs existentes sin una razón técnica o SEO válida.

---

# 13. SEO

Existe libertad para definir la estrategia SEO particular de los nuevos destinos.

`seo.json` debe utilizarse como referencia estratégica, pero no como una limitación rígida para estas nuevas páginas.

Para cada destino analizar:

- intención principal;
- keyword principal;
- keywords secundarias;
- búsquedas long-tail relacionadas;
- title;
- H1;
- meta description;
- headings;
- enlazado interno;
- contenido relacionado;
- datos estructurados.

---

# 14. Intención SEO

Priorizar búsquedas naturales de viajeros.

Ejemplos conceptuales:

```text
qué hacer en Cachi
qué visitar en Humahuaca
cómo visitar Salinas Grandes
qué hacer en El Cadillal
Ruinas de Quilmes Tucumán
cómo conocer el Hornocal
Quebrada de las Conchas qué visitar
Tren a las Nubes cómo funciona
```

No hacer keyword stuffing.

La información debe estar escrita para personas.

---

# 15. Prevención de canibalización

Aplicar:

```text
Una intención principal
=
Una URL principal
```

No crear nuevas guías independientes si la misma búsqueda puede resolverse correctamente dentro de la landing del destino.

Ejemplo:

Si:

```text
/salta/cachi/
```

responde correctamente:

```text
qué hacer en Cachi
```

no crear automáticamente:

```text
/salta/cachi/que-hacer/
```

---

# 16. Datos estructurados

Aplicar únicamente schemas que describan correctamente el contenido.

Según corresponda:

```text
TouristDestination
TouristAttraction
Article
BreadcrumbList
```

No agregar datos estructurados simplemente porque estén disponibles.

---

# 17. Enlazado interno

Cada nuevo destino debe integrarse al modelo Hub and Spoke.

Ejemplo:

```text
Salta
↓
Cachi
↓
destinos / experiencias / guías relacionadas
```

Debe existir navegación entre:

```text
Provincia → Destino
Destino → Provincia
Destino → Destinos cercanos
Destino → Experiencias relacionadas
Destino → Guías relacionadas
```

Evitar páginas huérfanas.

---

# 18. Relaciones geográficas

Utilizar relaciones razonables entre destinos cuando ayuden al viajero.

Ejemplos conceptuales:

```text
Cafayate
↔ Quebrada de las Conchas

Purmamarca
↔ Salinas Grandes

Humahuaca
↔ Hornocal

Tafí del Valle
↔ Amaicha del Valle
↔ Ruinas de Quilmes
```

Estas relaciones deben definirse mediante datos, no hardcodearse en componentes.

---

# 19. Imágenes disponibles

Antes de agregar imágenes nuevas, revisar:

```text
src/assets/
```

y cualquier otra carpeta de assets utilizada actualmente.

Algunos destinos ya pueden contar con imágenes definitivas.

**No sustituir una imagen aprobada por un placeholder.**

---

# 20. Nuevos placeholders

Se agregaron al proyecto **dos archivos de imagen placeholder**.

Identificarlos buscando archivos cuyo nombre termine o contenga:

```text
placeholder
```

Ejemplo conceptual:

```text
*_placeholder.png
```

Inspeccionar:

- dimensiones;
- aspect ratio;
- diseño;
- propósito visual.

Determinar cuál corresponde mejor a cada tipo de componente.

---

# 21. Uso de placeholders

Utilizar placeholders únicamente cuando un destino todavía no disponga de una imagen real adecuada.

Prioridad:

```text
1. Imagen definitiva disponible
2. Imagen existente reutilizable si corresponde realmente al lugar
3. Placeholder apropiado
```

Nunca utilizar una fotografía de otro destino fingiendo que corresponde al destino actual.

---

# 22. Placeholder como fallback

El sistema debe permitir que una imagen faltante pueda resolverse automáticamente.

Conceptualmente:

```ts
imagenDestino ?? placeholder;
```

Evitar tener que asignar manualmente un placeholder a cada contenido.

Centralizar la lógica cuando sea posible.

---

# 23. Tipos de placeholder

Analizar los dos placeholders existentes para determinar sus usos.

Por ejemplo, podrían cubrir:

```text
placeholder para card

placeholder para imagen grande / destino
```

No asumir el uso únicamente por el nombre.

Revisar dimensiones y composición.

---

# 24. Nuevos placeholders si fueran necesarios

Si los dos assets existentes no cubren correctamente algún formato necesario, se permite agregar un placeholder adicional.

Solo hacerlo cuando exista una necesidad real.

Debe:

- mantener la identidad visual del sitio;
- utilizar proporciones adecuadas al componente;
- ser claramente genérico;
- no representar falsamente un destino;
- no incluir información turística ficticia.

Utilizar nombres descriptivos.

Ejemplo:

```text
destination-card-placeholder.png
destination-hero-placeholder.png
```

Evitar múltiples placeholders innecesarios.

---

# 25. No usar placeholder en Hero si perjudica UX

Para páginas donde todavía no exista fotografía Hero:

evaluar si es mejor:

```text
usar placeholder grande
```

o:

```text
diseñar un Hero sin fotografía
```

Existe libertad para elegir la solución UX más adecuada.

Debe mantenerse `design.json` como fuente visual.

---

# 26. Alt de imágenes

Las imágenes reales deben tener alt descriptivo.

Ejemplo:

```text
Vista de la Quebrada de las Conchas en Salta
```

Los placeholders no deben generar descripciones falsas.

Si son puramente decorativos:

```html
alt=""
```

cuando corresponda semánticamente.

---

# 27. Performance de imágenes

Mantener el sistema actual de optimización.

Utilizar cuando corresponda:

- Astro Image;
- WebP;
- AVIF;
- `srcset`;
- `sizes`;
- `width`;
- `height`;
- lazy loading.

No servir imágenes originales sobredimensionadas.

---

# 28. Hero

Las imágenes Hero deben tratarse como recursos críticos.

Evitar:

- lazy loading del LCP;
- imágenes excesivamente pesadas;
- layout shift;
- dimensiones incorrectas.

Mantener buena calidad fotográfica sin comprometer performance.

---

# 29. Componentes

Reutilizar los componentes creados previamente.

No crear:

```text
CachiPage
HumahuacaPage
HornocalPage
```

si todos pueden resolverse mediante:

```text
DestinationPage
```

alimentada por Content Collections.

---

# 30. Diseño de los nuevos destinos

Existe libertad para diseñar la composición de cada landing.

Se pueden utilizar:

- fotografía panorámica;
- bloques editoriales;
- grids;
- cards;
- columnas;
- información práctica;
- secciones destacadas;
- galerías;
- módulos relacionados.

No todas las páginas deben ser visualmente idénticas.

Pero todas deben sentirse como parte de **Destinos del Norte**.

---

# 31. Mobile-first

Todo nuevo contenido debe funcionar correctamente en:

```text
mobile
tablet
desktop
```

Prestar especial atención a:

- Hero;
- galerías;
- cards;
- textos largos;
- grids;
- navegación relacionada;
- imágenes.

No resolver mobile como una adaptación posterior.

---

# 32. Performance

Mantener:

```text
Astro
+
SSG
+
HTML estático
+
mínimo JavaScript
```

No agregar librerías innecesarias.

No hidratar componentes puramente editoriales.

---

# 33. Fuera del alcance

Esta épica no implementa:

```text
usuarios
login
pagos
reservas
marketplace
CRM
dashboard
CMS externo
base de datos externa
panel de empresas
publicidad paga
```

---

# 34. Orden de ejecución

## Fase 1 — Auditoría

Identificar:

```text
destinos existentes
destinos faltantes
imágenes disponibles
placeholders existentes
estructura actual de Content Collections
```

---

## Fase 2 — Investigación

Investigar los destinos faltantes.

Crear contenido original, útil y verificable.

---

## Fase 3 — Contenido

Agregar los nuevos archivos correspondientes en:

```text
src/content/destinos/
```

utilizando la estructura existente.

---

## Fase 4 — Imágenes

Asociar:

```text
imagen real
```

cuando exista.

Caso contrario:

```text
placeholder
```

---

## Fase 5 — Relaciones

Configurar:

```text
provincia
destinos relacionados
experiencias
guías
```

cuando corresponda.

---

## Fase 6 — SEO

Definir para cada nuevo destino:

```text
slug
title
description
H1
intent
canonical
JSON-LD
internal linking
```

---

## Fase 7 — UX/UI

Revisar las páginas resultantes.

Mejorar composición cuando sea necesario manteniendo fidelidad a:

```text
design.json
```

---

## Fase 8 — QA

Ejecutar validaciones técnicas y visuales.

---

# 35. Validaciones obligatorias

Ejecutar:

```bash
npm run check
npm run build
```

Ambos deben finalizar sin errores.

---

# 36. QA de contenido

Comprobar que existan los 13 destinos esperados:

## Salta

```text
Cafayate
Cachi
Quebrada de las Conchas
Tren a las Nubes
```

## Jujuy

```text
Purmamarca
Tilcara
Humahuaca
Salinas Grandes
Hornocal
```

## Tucumán

```text
Tafí del Valle
Amaicha del Valle
Ruinas de Quilmes
El Cadillal
```

---

# 37. QA de imágenes

Verificar:

- ningún `<img>` roto;
- placeholders funcionando;
- assets definitivos utilizados cuando existan;
- ningún destino mostrando una fotografía incorrecta;
- alt correctos;
- tamaños correctos;
- Hero optimizados.

---

# 38. QA SEO

Verificar:

- URLs limpias;
- un H1 por página;
- title único;
- meta description única;
- canonical correcto;
- breadcrumbs;
- JSON-LD;
- sitemap;
- enlazado interno;
- ausencia de páginas duplicadas;
- ausencia de canibalización evidente.

---

# 39. QA visual

Revisar:

```text
mobile
tablet
desktop
```

Comprobar:

- coherencia con `design.json`;
- correcta jerarquía;
- imágenes bien recortadas;
- cards consistentes;
- contenido legible;
- ausencia de secciones vacías.

---

# 40. Criterios de aceptación

La Épica 2 estará finalizada cuando:

### Destinos

- existan los 13 destinos definidos;
- se hayan creado únicamente los que realmente faltaban;
- no existan duplicados.

### Contenido

- los nuevos destinos tengan información útil;
- el contenido haya sido investigado;
- no existan textos de relleno;
- no se inventen datos.

### Imágenes

- cada destino tenga una estrategia visual válida;
- se utilicen imágenes reales cuando existan;
- los placeholders funcionen como fallback;
- no existan imágenes rotas.

### Arquitectura

- todo siga siendo data-driven;
- agregar un destino no requiera crear un nuevo template;
- las relaciones se resuelvan mediante datos.

### SEO

- cada destino tenga una intención clara;
- las páginas tengan metadata correcta;
- se mantenga una buena arquitectura de enlazado;
- no exista canibalización innecesaria.

### Diseño

- las páginas mantengan la identidad de Destinos del Norte;
- se respete `design.json`;
- exista libertad de composición UX/UI.

### Performance

- el sitio siga utilizando SSG;
- las imágenes estén optimizadas;
- no exista JavaScript innecesario;
- `npm run check` y `npm run build` finalicen correctamente.

---

# 41. Resultado esperado

Al finalizar la épica deberá existir:

```text
Destinos del Norte
│
├── Salta
│   ├── Cafayate
│   ├── Cachi
│   ├── Quebrada de las Conchas
│   └── Tren a las Nubes
│
├── Jujuy
│   ├── Purmamarca
│   ├── Tilcara
│   ├── Humahuaca
│   ├── Salinas Grandes
│   └── Hornocal
│
└── Tucumán
    ├── Tafí del Valle
    ├── Amaicha del Valle
    ├── Ruinas de Quilmes
    └── El Cadillal
```

Todas estas páginas deben integrarse correctamente al sistema existente.

---

# 42. Principio final

La implementación debe seguir siendo:

```text
Información investigada
        ↓
Content Collections
        ↓
Relaciones entre contenidos
        ↓
Templates reutilizables
        ↓
Astro SSG
        ↓
SEO
        ↓
Destinos del Norte
```

La incorporación de nuevos destinos debe realizarse principalmente mediante **datos, contenido e imágenes**, no mediante duplicación de código.

---

# 43. Instrucción final de ejecución

No entregar solamente un análisis o una lista de cambios.

Ejecutar la Épica 2 sobre el proyecto existente.

Flujo obligatorio:

```text
Auditar repositorio
↓
Identificar cuáles de los 13 destinos faltan
↓
Inspeccionar placeholders existentes
↓
Investigar destinos faltantes
↓
Crear contenido original
↓
Agregar Content Collections
↓
Asignar imágenes / placeholders
↓
Configurar relaciones
↓
Implementar SEO
↓
Revisar UX/UI
↓
npm run check
↓
npm run build
↓
QA final
```

No asumir que algo falta sin comprobar primero el repositorio.

No duplicar contenido ya implementado.

No utilizar imágenes falsas de otro destino como reemplazo.

Existe libertad para investigar y enriquecer las páginas siempre que el resultado mantenga **calidad de contenido, coherencia SEO, buena UX y fidelidad a `design.json`**.

```

```
