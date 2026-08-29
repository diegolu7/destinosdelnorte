# ÉPICA 1 — Expansión de Destinos, Guías y Arquitectura SEO

## Proyecto: Destinos del Norte

> **Objetivo de la épica:** Evolucionar la arquitectura actual de Destinos del Norte desde un catálogo turístico inicial hacia un sistema de contenido completo y escalable basado en:

```text
Provincia
↓
Destino
↓
Guía / Experiencia
```

La implementación debe fortalecer especialmente las páginas de destino, preparar el sistema de guías SEO long-tail y estructurar correctamente las experiencias.

Esta épica debe trabajar sobre la arquitectura existente.

**No reconstruir el proyecto desde cero.**

---

# 1. Contexto

Destinos del Norte es una plataforma turística dedicada inicialmente a:

- Salta
- Jujuy
- Tucumán

El proyecto actualmente utiliza:

- Astro 5
- TypeScript
- Tailwind CSS v4
- Astro Content Collections
- Static Site Generation
- SEO centralizado
- GitHub Pages
- GitHub Actions

Actualmente existen:

- Home
- páginas de provincia
- páginas de destino
- componentes reutilizables
- `SeoHead.astro`
- sitemap
- robots.txt
- breadcrumbs
- JSON-LD
- Content Collections
- sistema de imágenes optimizadas
- arquitectura de rutas dinámicas

La intención de esta épica es **expandir esta base**, no sustituirla.

---

# 2. Fuentes de verdad

Antes de modificar código, leer obligatoriamente:

```text
./tarea.md
./info.json
./design.json
./seo.json
```

Cada archivo tiene una responsabilidad concreta:

```text
info.json
→ contenido y estructura definida del sitio

design.json
→ identidad visual, tokens y comportamiento responsive

seo.json
→ arquitectura SEO, URLs, intención de búsqueda e indexación

tarea.md
→ arquitectura técnica y reglas generales de implementación

ÉPICA 1
→ alcance concreto de esta etapa
```

No copiar dentro de esta épica configuraciones que ya estén definidas en esos archivos.

---

# 3. Regla principal

Para esta épica existe **libertad para definir la estructura de contenido, arquitectura editorial y estrategia SEO de las nuevas páginas**.

Los archivos existentes deben interpretarse de la siguiente manera:

````text
design.json
→ fuente de verdad obligatoria del sistema visual

info.json
→ referencia de la Home actual; no limita el contenido de destinos, guías o experiencias

seo.json
→ referencia de la estrategia SEO inicial; puede ampliarse, ajustarse o evolucionar cuando una nueva página lo requiera



# 4. Alcance de la Épica 1

Esta épica debe implementar:

## A. Mejorar las páginas de destino

Transformar:

```text
/{provincia}/{destino}/
````

en landings turísticas completas.

## B. Extender el modelo de datos de destinos

Permitir que cada destino pueda almacenar información suficiente para construir una landing completa sin hardcodear contenido en los componentes.

## C. Implementar arquitectura de guías

Crear el sistema necesario para soportar guías específicas asociadas a destinos.

## D. Preparar arquitectura de experiencias

Permitir asociar experiencias y temáticas turísticas a destinos.

## E. Fortalecer el enlazado interno

Aplicar correctamente la arquitectura:

```text
Provincia
↓
Destino
↓
Guía / Experiencia
```

## F. Mantener coherencia SEO

Toda página generada debe seguir lineamientos de `seo.json` con libertad de mejorar para esta nueva etapa.

---

# 5. Prioridad de ejecución

Trabajar estrictamente en este orden:

```text
1. Analizar arquitectura existente
2. Extender Content Collections
3. Mejorar template de destino
4. Crear componentes reutilizables
5. Crear sistema de guías
6. Integrar experiencias
7. Mejorar enlazado interno
8. Revisar SEO
9. Revisar responsive
10. Ejecutar validaciones
```

No comenzar creando nuevas rutas antes de entender el sistema actual.

---

# 6. Análisis previo obligatorio

Antes de escribir código:

1. revisar estructura actual de `src/`;
2. revisar `content.config.ts`;
3. revisar colección actual de destinos;
4. revisar páginas dinámicas existentes;
5. revisar componentes reutilizables;
6. revisar `SeoHead.astro`;
7. revisar cómo se manejan imágenes;
8. revisar `astro.config.mjs`;
9. revisar cómo se construyen breadcrumbs;
10. revisar cómo funciona actualmente el enlazado entre provincias y destinos.

No duplicar una solución que ya exista.

---

# 7. Páginas de destino

Las páginas:

```text
/{provincia}/{destino}/
```

deben convertirse en el principal hub SEO de cada destino.

Ejemplos:

```text
/salta/cafayate/
/jujuy/purmamarca/
/jujuy/tilcara/
/tucuman/tafi-del-valle/
/tucuman/amaicha-del-valle/
```

Cada página podrá contener, cuando existan datos:

```text
Hero
Introducción
Qué hacer
Lugares imperdibles
Experiencias
Cómo llegar
Mejor época
Duración recomendada
Dónde comer
Dónde alojarse
Consejos
Destinos cercanos
Guías relacionadas
```

No es obligatorio mostrar todas las secciones en todos los destinos.

---

# 8. Secciones opcionales

Todas las secciones basadas en contenido deben funcionar con esta regla:

```text
si existen datos
→ renderizar sección

si no existen datos
→ no renderizar nada
```

Nunca mostrar:

```text
Próximamente
Lorem ipsum
Información no disponible
Contenido pendiente
```

únicamente para completar el layout.

---

# 9. Modelo data-driven

La información turística no debe vivir dentro del template.

Debe provenir de Content Collections.

Extender el esquema actual para soportar conceptos equivalentes a:

```ts
hero;
intro;
lugaresImperdibles;
experiencias;
comoLlegar;
mejorEpoca;
diasRecomendados;
dondeComer;
dondeAlojarse;
consejos;
destinosCercanos;
guiasRelacionadas;
```

Estos nombres son conceptuales.

Si la arquitectura actual utiliza mejores nombres o estructuras, conservar la convención existente.

---

# 10. Tipado

Mantener TypeScript estricto.

Evitar:

```ts
any;
```

si existe una alternativa razonable.

Los nuevos campos deben:

- estar correctamente tipados;
- soportar opcionalidad cuando corresponda;
- evitar duplicación;
- permitir validación desde Content Collections.

---

# 11. Contenido turístico

No inventar información turística factual únicamente para rellenar páginas.

Si un destino todavía no dispone de datos suficientes:

```text
implementar estructura
+
no mostrar la sección vacía
```

El sistema debe quedar preparado para que posteriormente agregar contenido implique principalmente editar archivos de Content Collections.

---

# 12. Diseño y libertad de composición

Toda nueva página o sección debe utilizar:

```text
./design.json
```

como **fuente de verdad del sistema visual**.

`design.json` define la identidad de Destinos del Norte:

- colores;
- tipografías;
- jerarquías;
- espaciados;
- radios;
- sombras;
- botones;
- estados;
- responsive;
- criterios generales de UI.

Sin embargo:

> **No es obligatorio replicar literalmente la composición de la Home.**

Existe libertad para diseñar páginas de destino, guías y experiencias.

---

# 13. Qué puede diseñarse libremente

Se permite decidir la mejor composición para:

- Hero de destinos
- introducciones editoriales
- galerías
- grids
- lugares destacados
- cards
- bloques de información
- experiencia de lectura
- información práctica
- secciones de planificación
- imágenes destacadas
- llamadas visuales
- destinos relacionados
- guías relacionadas
- estructura editorial

Las diferentes páginas pueden utilizar composiciones distintas cuando el contenido lo justifique.

---

# 14. Restricción de diseño

La libertad de composición no significa libertad de identidad.

No crear:

- nuevas paletas arbitrarias;
- nuevas familias tipográficas;
- otro sistema de botones;
- otra escala visual completamente diferente;
- sombras ajenas al sistema;
- estilos que hagan parecer la página otro producto.

La regla es:

```text
Libertad de composición
+
Fidelidad a design.json
```

---

# 15. Criterio de decisión visual

Cuando `design.json` no determine explícitamente cómo resolver una sección, decidir siguiendo este orden:

```text
1. UX
2. Claridad del contenido
3. Jerarquía visual
4. Responsive
5. Performance
6. Coherencia con Destinos del Norte
```

No copiar automáticamente el patrón de la Home cuando una página editorial requiera otra solución.

---

# 16. Ejemplo conceptual de página de destino

Una página podría utilizar:

```text
Hero fotográfico
↓
Introducción editorial
↓
Lugares imperdibles
↓
Qué hacer
↓
Experiencias
↓
Bloque práctico para planificar
↓
Cómo llegar
↓
Mejor época
↓
Consejos
↓
Guías relacionadas
↓
Destinos cercanos
```

Esto es únicamente una referencia conceptual.

La composición definitiva puede mejorarse si existe una solución UX superior.

---

# 17. Hero de destino

Crear un componente reutilizable:

```text
DestinationHero
```

o equivalente.

Debe aceptar datos como:

```text
imagen
titulo
provincia
descripcion
breadcrumb
```

cuando correspondan.

No crear:

```text
CafayateHero
PurmamarcaHero
TafiHero
```

---

# 18. Uso de fotografía

Las páginas de destino tienen fuerte componente visual.

Las fotografías deben:

- funcionar como parte de la experiencia;
- respetar correctamente el aspect ratio;
- permitir crop responsive;
- evitar deformación;
- tener width/height definidos;
- utilizar optimización de Astro;
- utilizar lazy loading fuera del viewport.

La fotografía Hero debe tratarse como recurso prioritario de LCP.

---

# 19. Componentes reutilizables

Crear o adaptar componentes conceptualmente equivalentes a:

```text
DestinationHero
DestinationIntro
PlacesGrid
PlaceCard
ExperienceGrid
ExperienceCard
TravelInfo
TravelTips
GuideCard
RelatedGuides
RelatedDestinations
Breadcrumbs
```

No es obligatorio utilizar exactamente estos nombres.

Priorizar reutilización antes que cantidad de componentes.

---

# 20. Evitar componentes demasiado específicos

Incorrecto:

```text
CafayatePlaces
TilcaraExperiences
PurmamarcaTravelInfo
```

Correcto:

```text
PlacesGrid
ExperienceGrid
TravelInfo
```

alimentados mediante datos.

---

# 21. Arquitectura de guías

Crear:

```text
src/content/guias/
```

si aún no existe.

Definir una Content Collection adecuada.

Cada guía deberá poder asociarse a:

```text
provincia
destino
tipo
slug
```

y disponer de los datos SEO correspondientes.

---

# 22. Campos conceptuales de una guía

Una guía podrá contener:

```text
titulo
descripcion
provincia
destino
slug
tipo
imagen
fechaActualizacion
contenido
seo
```

Adaptar los nombres a las convenciones actuales del proyecto.

---

# 23. Rutas de guías

Las guías podrán generar URLs como:

```text
/{provincia}/{destino}/{guia}/
```

Ejemplos:

```text
/salta/cafayate/como-llegar/
/salta/cafayate/mejor-epoca/
/jujuy/purmamarca/como-llegar/
```

Pero la existencia de una URL debe estar justificada por `seo.json`.

---

# 24. Regla crítica de canibalización

Aplicar:

```text
Una intención de búsqueda
=
Una URL principal
```

Antes de crear una guía verificar si la intención ya está cubierta por el destino.

Ejemplo:

Si:

```text
/salta/cafayate/
```

está posicionada alrededor de:

```text
qué hacer en Cafayate
```

no crear automáticamente:

```text
/salta/cafayate/que-hacer/
```

si ambas páginas competirían por exactamente la misma intención.

---

# 25. No generar guías automáticamente

No crear páginas mediante combinaciones como:

```text
todos los destinos
×
todos los tipos de guía
```

Ejemplo incorrecto:

```text
/cafayate/como-llegar/
/cafayate/mejor-epoca/
/cafayate/que-hacer/
/cafayate/consejos/
/cafayate/clima/
```

únicamente porque técnicamente sea posible.

Cada URL debe existir por una razón editorial y SEO.

---

# 26. Experiencias

Mantener o extender la arquitectura actual de experiencias.

Conceptos iniciales:

```text
Aventura
Cultura
Gastronomía
Naturaleza
Bodegas
Senderismo
```

Las experiencias deben poder relacionarse con destinos.

Ejemplo:

```text
Cafayate
├── Gastronomía
└── Bodegas
```

---

# 27. Relación destino ↔ experiencia

El modelo de datos debe permitir consultar:

```text
¿Qué experiencias existen en este destino?
```

y, posteriormente:

```text
¿En qué destinos puedo realizar esta experiencia?
```

No duplicar la misma información manualmente en varios archivos si puede modelarse mediante relaciones.

---

# 28. URLs de experiencias

No convertir automáticamente todas las relaciones destino/experiencia en páginas indexables.

Solo crear una landing específica cuando exista:

- intención de búsqueda;
- suficiente contenido;
- valor real para el usuario;
- diferenciación respecto al destino.

Seguir siempre `seo.json`.

---

# 29. Enlazado interno

Mantener la arquitectura Hub and Spoke.

El flujo debe ser:

```text
Provincia
↓
Destino
↓
Guía / Experiencia
```

y también permitir navegación inversa.

---

# 30. Reglas de enlazado

Implementar:

```text
Provincia → destinos

Destino → provincia

Destino → guías relacionadas

Guía → destino

Destino → experiencias

Destino → destinos cercanos

Guía → guías relacionadas cuando tenga sentido
```

Evitar páginas huérfanas.

---

# 31. Destinos cercanos

La sección de destinos cercanos debe ser data-driven.

No definir relaciones dentro del componente.

Ejemplo conceptual:

```yaml
destinosCercanos:
  - cachi
  - cafayate
```

El template debe resolver los datos necesarios.

---

# 32. Breadcrumbs

Mantener breadcrumbs en páginas jerárquicas.

Ejemplo:

```text
Inicio
>
Salta
>
Cafayate
```

Para una guía:

```text
Inicio
>
Salta
>
Cafayate
>
Cómo llegar
```

Reutilizar la solución existente.

---

# 33. SEO

Toda página indexable debe utilizar el sistema SEO actual.

Reutilizar:

```text
SeoHead.astro
```

No crear otro sistema paralelo.

---

# 34. Metadata

Cada página deberá resolver correctamente cuando corresponda:

```text
title
meta description
canonical
robots
Open Graph
Twitter Card
```

Las reglas y templates deben provenir de:

```text
seo.json
```

---

# 35. JSON-LD

Mantener los tipos existentes y agregar solamente cuando corresponda.

Destinos:

```text
TouristDestination
```

Atractivos específicos:

```text
TouristAttraction
```

Guías editoriales:

```text
Article
```

Navegación:

```text
BreadcrumbList
```

No crear schema que describa contenido inexistente.

---

# 36. Sitemap

Las nuevas páginas indexables deben aparecer correctamente en el sitemap generado.

No incluir:

- páginas noindex;
- páginas vacías;
- búsquedas;
- filtros internos;
- URLs duplicadas.

---

# 37. Performance

No degradar la arquitectura actual.

Mantener:

```text
Astro
+
SSG
+
HTML estático
+
JavaScript mínimo
```

Priorizar:

```text
LCP
INP
CLS
```

---

# 38. JavaScript

No utilizar JavaScript para contenido que pueda resolverse con HTML y CSS.

No usar React salvo que exista una necesidad concreta de estado complejo.

No hidratar:

- cards;
- textos;
- grids;
- contenido editorial

sin justificación.

---

# 39. Imágenes

Utilizar:

- Astro Image cuando corresponda;
- WebP / AVIF;
- srcset;
- sizes;
- width;
- height;
- lazy loading fuera del viewport.

No servir imágenes de varios MB en cards pequeñas.

---

# 40. Responsive

Todo componente nuevo debe funcionar correctamente en:

```text
mobile
tablet
desktop
```

No implementar desktop primero y después parchear mobile.

Diseñar desde el principio considerando ambos contextos.

---

# 41. Accesibilidad

Aplicar:

- HTML semántico;
- navegación por teclado;
- focus visible;
- contraste correcto;
- alt descriptivos;
- headings jerárquicos;
- botones reales;
- enlaces reales.

No utilizar ARIA cuando HTML semántico ya resuelva el problema.

---

# 42. Contenido inicial

Priorizar los destinos existentes:

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

La prioridad es conseguir páginas de buena calidad antes de agregar gran cantidad de destinos.

---

# 43. No inventar contenido faltante

Si faltan textos completos para:

```text
cómo llegar
dónde comer
mejor época
consejos
```

no generar afirmaciones turísticas como si fueran datos verificados.

Implementar la capacidad técnica y renderizar solamente contenido disponible.

---

# 44. Futuras empresas turísticas

Esta épica no implementa empresas.

Sin embargo, evitar una arquitectura que impida posteriormente relacionar:

```text
empresa
↓
provincia
↓
destino
↓
experiencia
```

No crear todavía:

- colección de empresas completa;
- marketplace;
- perfiles comerciales;
- login;
- reservas;
- pagos.

---

# 45. Fuera de alcance

No implementar en esta épica:

```text
Autenticación
Usuarios
Reservas
Pagos
CRM
Dashboard
CMS externo
Base de datos externa
Marketplace
Publicidad
Sistema B2B
```

No introducir complejidad prematura.

---

# 46. Restricciones técnicas

No:

- rehacer la Home sin necesidad;
- rehacer arquitectura existente;
- duplicar layouts;
- duplicar componentes;
- hardcodear destinos;
- hardcodear contenido turístico;
- crear URLs arbitrarias;
- crear páginas SEO vacías;
- generar canibalización;
- introducir base de datos;
- instalar dependencias innecesarias;
- utilizar React innecesariamente;
- crear un segundo sistema SEO;
- crear un segundo sistema visual.

---

# 47. Estrategia de implementación

Realizar la épica incrementalmente.

## Fase 1 — Auditoría

Revisar:

```text
content.config.ts
colecciones
rutas
componentes
SEO
layouts
assets
```

## Fase 2 — Datos

Extender el modelo de:

```text
destinos
```

y crear:

```text
guias
```

si corresponde.

## Fase 3 — Destination Layout

Transformar la página actual de destino en una landing completa basada en datos.

## Fase 4 — Componentes

Crear únicamente los componentes reutilizables necesarios.

## Fase 5 — Guías

Crear template + rutas dinámicas + relaciones.

## Fase 6 — Experiencias

Conectar experiencias existentes con destinos.

## Fase 7 — SEO

Validar:

```text
metadata
canonical
breadcrumbs
JSON-LD
sitemap
internal linking
```

## Fase 8 — UX/UI

Refinar composición respetando `design.json`.

Existe libertad creativa para conseguir una landing turística profesional.

## Fase 9 — Responsive

Validar mobile, tablet y desktop.

## Fase 10 — QA

Ejecutar validaciones técnicas completas.

---

# 48. Validaciones obligatorias

Ejecutar:

```bash
npm run check
npm run build
```

Ambos deben finalizar correctamente.

---

# 49. QA funcional

Verificar:

- Home continúa funcionando;
- provincias continúan funcionando;
- destinos funcionan;
- nuevas guías funcionan;
- links no están rotos;
- breadcrumbs correctos;
- imágenes cargan correctamente;
- rutas correctas;
- responsive correcto;
- no existen errores relevantes de consola.

---

# 50. QA SEO

Verificar:

- un único H1;
- titles correctos;
- descriptions correctas;
- canonical correcto;
- robots correcto;
- URLs limpias;
- sitemap actualizado;
- JSON-LD válido;
- breadcrumbs correctos;
- páginas noindex fuera del sitemap;
- ausencia de URLs duplicadas;
- ausencia de canibalización evidente.

---

# 51. QA Performance

Revisar especialmente:

```text
Hero
imágenes
fuentes
JavaScript
layout shifts
```

Evitar regresiones respecto de la versión actual.

---

# 52. Criterios de aceptación

La Épica 1 se considera completada cuando:

### Arquitectura

- las páginas de destino son data-driven;
- pueden soportar múltiples secciones;
- no contienen contenido turístico hardcodeado;
- los componentes son reutilizables.

### Contenido

- las secciones vacías no aparecen;
- agregar contenido no requiere modificar templates;
- agregar un nuevo destino no requiere crear componentes específicos.

### Guías

- existe una arquitectura de guías reutilizable;
- pueden asociarse a provincia y destino;
- generan rutas estáticas;
- respetan la estrategia SEO.

### Experiencias

- pueden relacionarse con destinos;
- el destino puede mostrar experiencias relacionadas;
- la estructura sigue siendo escalable.

### SEO

- se conserva Hub and Spoke;
- metadata centralizada;
- breadcrumbs correctos;
- sitemap correcto;
- no se generan páginas arbitrarias.

### Diseño

- las nuevas páginas respetan `design.json`;
- existe libertad de composición;
- no parecen una copia rígida de la Home;
- mantienen identidad visual.

### Performance

- contenido principal estático;
- JavaScript mínimo;
- imágenes optimizadas;
- sin regresiones graves de Core Web Vitals.

---

# 53. Resultado esperado de la épica

Al finalizar debe existir una arquitectura como:

```text
Destinos del Norte
│
├── Salta
│   └── Cafayate
│       ├── Información completa del destino
│       ├── Experiencias
│       ├── Guías
│       └── Destinos relacionados
│
├── Jujuy
│   ├── Purmamarca
│   └── Tilcara
│
└── Tucumán
    ├── Tafí del Valle
    └── Amaicha del Valle
```

La aplicación debe seguir siendo:

```text
data-driven
+
SEO-first
+
SSG
+
performante
+
mantenible
```

---

# 54. Principio final

La implementación debe estar diseñada para que el crecimiento futuro ocurra así:

```text
Agregar contenido
        ↓
Content Collections
        ↓
Astro genera las páginas
        ↓
Templates reutilizables
        ↓
SEO automático según reglas existentes
```

y no así:

```text
Nuevo destino
↓
Nueva página manual
↓
Nuevo componente
↓
Nuevo CSS
↓
Nueva lógica
```

---

# 55. Instrucción de ejecución

No entregar solamente una propuesta teórica.

Ejecutar la épica sobre el proyecto existente.

Antes de comenzar:

```text
Leer tarea.md
↓
Leer info.json
↓
Leer design.json
↓
Leer seo.json
↓
Auditar código actual
↓
Definir cambios mínimos necesarios
↓
Implementar
↓
Validar
↓
npm run check
↓
npm run build
```

No asumir que una funcionalidad falta sin revisar primero la implementación existente.

No reemplazar una solución funcional cuando pueda extenderse correctamente.

La prioridad es **evolucionar la arquitectura existente con el mínimo nivel de complejidad necesario**.
