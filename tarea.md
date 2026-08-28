# Destinos del Norte — Prompt Maestro de Implementación

> **Objetivo principal:** Construir la primera versión de **Destinos del Norte**, una plataforma web turística enfocada inicialmente en **Salta, Jujuy y Tucumán**, orientada a ayudar a viajeros a descubrir destinos, lugares, actividades y experiencias del Norte Argentino.

El sitio debe ser:

- rápido,
- responsive,
- mobile-first,
- accesible,
- visualmente profesional,
- optimizado para SEO,
- fácilmente indexable,
- escalable mediante contenido,
- simple de mantener.

En futuras etapas, la plataforma podrá incorporar empresas turísticas y funcionar como punto de conexión entre viajeros y prestadores.

No implementar todavía funcionalidades empresariales complejas.

---

# 1. Fuentes de verdad del proyecto

En la raíz del proyecto existen tres archivos fundamentales.

Deben ser consultados antes de implementar cualquier sección o página.

## `./info.json`

Es la **fuente de verdad del contenido y estructura funcional**.

Define:

- secciones,
- orden,
- textos,
- títulos,
- CTAs,
- navegación,
- destinos,
- experiencias,
- patrones repetibles,
- contenido visible,
- comportamiento del contenido.

No inventar contenido cuando ya esté definido aquí.

---

## `./design.json`

Es la **fuente de verdad del sistema visual**.

Define:

- colores,
- tipografías,
- tamaños,
- espaciados,
- grids,
- layouts,
- sombras,
- border radius,
- botones,
- estados hover,
- comportamiento responsive,
- restricciones visuales.

No crear un sistema visual alternativo.

---

## `./seo.json`

Es la **fuente de verdad de SEO**.

Define:

- arquitectura de URLs,
- jerarquía de páginas,
- intención de búsqueda,
- keywords,
- metadata,
- canonical,
- sitemap,
- robots,
- breadcrumbs,
- enlazado interno,
- datos estructurados,
- reglas de indexación,
- prevención de canibalización,
- estrategia de crecimiento SEO.

Toda decisión relacionada con URLs, contenido indexable y metadata debe respetar este archivo.

---

# 2. Regla de responsabilidades

Utilizar esta separación:

```text
Contenido y estructura → info.json
Diseño y responsive    → design.json
SEO y URLs             → seo.json
Implementación técnica → tarea.md
Assets visuales        → archivos PNG provistos
```

No duplicar dentro del código información que pueda obtenerse razonablemente desde estas fuentes.

Si existe un conflicto, respetar la fuente correspondiente al área afectada.

---

# 3. Assets visuales disponibles

En la raíz del proyecto también existen imágenes definitivas que deben utilizarse para construir la interfaz.

```text
design.json
full_sitio_destinos_del_norte.png
hero_img.png
info.json
jujuy_que_hacer_card.png
logo_destinos_del_norte.png
salta_que_hacer_card.png
seccion_atractivo_amicha.png
seccion_atractivo_cafayate.png
seccion_atractivo_cerro_7_colores.png
seccion_atractivo_purmamarca.png
seccion_atractivo_tafi_del_valle.png
seccion_atractivo_tilcara.png
seo.json
tucuman_que_hacer_card.png
```

Estos recursos **ya forman parte del diseño aprobado**.

No reemplazarlos arbitrariamente por:

- imágenes generadas,
- stock photos,
- placeholders,
- gradientes simulando fotografías,
- imágenes externas.

---

# 4. Uso de assets

## Logo

Utilizar:

```text
./logo_destinos_del_norte.png
```

como logo oficial del proyecto.

No recrear, alterar ni reinterpretar el logo.

---

## Hero

Utilizar:

```text
./hero_img.png
```

como imagen principal del Hero.

Debe implementarse respetando el layout definido por `design.json` y el contenido definido por `info.json`.

Debe recibir tratamiento especial de performance por su impacto sobre LCP.

---

## Sección “Qué hacer”

Utilizar las imágenes correspondientes:

```text
./salta_que_hacer_card.png
./jujuy_que_hacer_card.png
./tucuman_que_hacer_card.png
```

Estas imágenes corresponden a las cards principales de las provincias.

No sustituirlas.

---

## Sección de atractivos / destinos

Utilizar los siguientes recursos:

```text
./seccion_atractivo_cafayate.png
./seccion_atractivo_cerro_7_colores.png
./seccion_atractivo_purmamarca.png
./seccion_atractivo_tafi_del_valle.png
./seccion_atractivo_tilcara.png
./seccion_atractivo_amicha.png
```

La asociación exacta entre contenido, cards y destinos debe derivarse de `info.json`.

No inferir nuevos textos a partir del nombre del archivo si `info.json` ya especifica el contenido.

---

# 5. Referencia visual completa

También está disponible:

```text
./full_sitio_destinos_del_norte.png
```

Esta imagen funciona como **referencia visual integral del resultado esperado**.

Utilizarla para comprender:

- composición general,
- jerarquía visual,
- distribución de secciones,
- proporciones,
- relación entre componentes,
- apariencia general del sitio.

Sin embargo:

```text
design.json
```

continúa siendo la fuente de verdad para las reglas concretas del sistema visual.

La imagen completa es una referencia de implementación, no un reemplazo de `design.json`.

---

# 6. Stack tecnológico

## Framework

```text
Astro + TypeScript
```

Priorizar generación estática.

Build:

```bash
npm run build
```

o el comando equivalente definido en `package.json`.

El resultado deberá poder ser publicado como sitio estático.

---

## Estilos

Utilizar:

```text
Tailwind CSS
```

Tailwind debe implementar las reglas de `design.json`.

No utilizar Tailwind como excusa para modificar el sistema de diseño.

---

## Interactividad

Orden de preferencia:

```text
1. Astro
2. CSS
3. TypeScript / JavaScript nativo
4. React únicamente cuando exista una necesidad real
```

No hidratar componentes innecesariamente.

No utilizar React para componentes estáticos.

El contenido SEO relevante debe existir directamente en el HTML generado.

---

# 7. Datos

La primera versión no utilizará una base de datos externa.

Los datos vivirán dentro del repositorio.

Preferir:

```text
Astro Content Collections
```

cuando resulte conveniente para:

- provincias,
- destinos,
- guías,
- experiencias,
- futuras empresas,
- generación de páginas.

Estructura conceptual:

```text
src/
├── content/
│   ├── provincias/
│   ├── destinos/
│   ├── experiencias/
│   ├── guias/
│   └── empresas/
```

Puede modificarse esta organización si existe una solución técnicamente superior, manteniendo una clara separación por dominio.

---

# 8. Arquitectura de componentes

Construir componentes reutilizables.

Ejemplos conceptuales:

```text
Header
Hero
SearchBar
SectionTitle
ProvinceCard
DestinationCard
ExperienceCard
Breadcrumbs
Newsletter
Footer
SeoHead
```

Evitar componentes duplicados por contenido.

Incorrecto:

```text
SaltaCard
JujuyCard
TucumanCard
```

Preferir:

```text
ProvinceCard
```

alimentado mediante propiedades o datos.

Aplicar el mismo criterio para destinos, experiencias, guías y futuras empresas.

---

# 9. Separación entre datos y presentación

Los componentes visuales no deben contener información turística hardcodeada cuando pueda obtenerse desde los datos del proyecto.

Preferir:

```text
datos
↓
componente reutilizable
↓
HTML generado
```

en lugar de:

```text
contenido duplicado dentro de múltiples componentes
```

Agregar nuevos destinos debería requerir principalmente agregar contenido o datos.

---

# 10. Páginas y rutas

La aplicación debe quedar preparada para soportar los tipos de página definidos en:

```text
./seo.json
```

La generación de páginas debe ser data-driven siempre que sea razonable.

Utilizar las capacidades de Astro para generación estática de rutas dinámicas.

No crear manualmente múltiples páginas con exactamente la misma estructura.

No crear páginas vacías únicamente para reservar URLs futuras.

---

# 11. SEO

Implementar las reglas establecidas en:

```text
./seo.json
```

No reproducir aquí dichas reglas.

Crear una solución SEO reutilizable y centralizada.

Ejemplo conceptual:

```text
SeoHead.astro
```

Debe permitir manejar correctamente, cuando corresponda:

- title,
- description,
- canonical,
- robots,
- Open Graph,
- JSON-LD,
- breadcrumbs,
- metadata específica.

No duplicar lógica SEO entre templates.

No crear nuevas URLs indexables fuera de las reglas establecidas en `seo.json`.

---

# 12. Imágenes y performance visual

Los recursos gráficos son fundamentales para este proyecto turístico.

Utilizar los assets proporcionados como fuente visual principal.

Cuando técnicamente sea posible:

- utilizar optimización de imágenes de Astro,
- generar tamaños adecuados,
- evitar servir imágenes mucho mayores a su render final,
- definir `width` y `height`,
- evitar layout shifts,
- aplicar lazy loading fuera del viewport,
- mantener alta calidad visual.

Para el Hero:

- priorizar carga,
- evitar lazy loading si afecta LCP,
- evitar scripts que retrasen su renderizado.

No modificar visualmente los assets de manera que se pierda la composición aprobada.

---

# 13. Responsive

El sitio debe funcionar correctamente en:

- mobile,
- tablet,
- desktop.

Las reglas concretas están definidas en:

```text
./design.json
```

No crear dos implementaciones independientes.

Utilizar los mismos componentes adaptándose mediante CSS y layout responsive.

---

# 14. Accesibilidad

Utilizar HTML semántico.

Preferir:

```html
<header>
  <nav>
    <main>
      <section>
        <article>
          <footer></footer>
        </article>
      </section>
    </main>
  </nav>
</header>
```

Aplicar como mínimo:

- jerarquía correcta de headings,
- navegación mediante teclado,
- foco visible,
- contraste adecuado,
- `alt` descriptivo,
- labels accesibles,
- botones reales para acciones,
- enlaces reales para navegación.

No utilizar `div` para simular botones o enlaces.

Utilizar ARIA únicamente cuando HTML semántico no sea suficiente.

---

# 15. Performance

La performance forma parte de los requisitos funcionales.

Priorizar especialmente:

```text
LCP
INP
CLS
```

Evitar:

- JavaScript innecesario,
- hidratación innecesaria,
- librerías pesadas,
- animaciones costosas,
- imágenes sobredimensionadas,
- múltiples familias tipográficas innecesarias,
- scripts externos no esenciales,
- renderizado client-side del contenido principal.

Aprovechar Astro principalmente para producir HTML estático.

---

# 16. Animaciones

Las animaciones deben ser discretas.

Pueden utilizarse para:

- hover,
- feedback,
- menú mobile,
- acordeones,
- pequeñas transiciones,
- estados interactivos.

No utilizar efectos visuales que comprometan performance o usabilidad.

Regla general:

```text
SEO + Performance + UX > Animaciones
```

No agregar librerías de animación salvo necesidad técnica concreta.

---

# 17. Buscador

El buscador inicial debe trabajar únicamente con información disponible dentro del proyecto.

No incorporar todavía:

- Algolia,
- ElasticSearch,
- APIs externas,
- bases de datos,
- motores externos de búsqueda.

Implementar una solución simple y escalable acorde al MVP.

No convertir filtros internos automáticamente en URLs indexables salvo que `seo.json` lo determine.

---

# 18. Escalabilidad

La solución debe permitir que agregar contenido nuevo implique principalmente:

```text
Agregar datos/contenido
```

y no:

```text
Duplicar componentes
Duplicar templates
Duplicar lógica
```

La arquitectura debe permitir posteriormente incorporar:

- nuevas provincias,
- nuevos destinos,
- nuevas experiencias,
- rutas,
- guías,
- artículos,
- empresas turísticas.

No implementar ahora esas funcionalidades futuras si no son necesarias para esta primera versión.

---

# 19. Fuera del alcance inicial

No implementar:

- autenticación,
- panel administrativo,
- reservas,
- pagos,
- cuentas de usuario,
- marketplace completo,
- CRM,
- CMS externo,
- base de datos externa,
- funcionalidades B2B complejas.

Evitar complejidad prematura.

---

# 20. Buenas prácticas

Aplicar:

- TypeScript estricto,
- componentes reutilizables,
- separación de responsabilidades,
- separación entre datos y presentación,
- nombres descriptivos,
- HTML semántico,
- CSS mantenible,
- mínima dependencia de JavaScript,
- mínima cantidad de dependencias,
- código simple y legible.

Evitar sobrearquitectura.

---

# 21. Restricciones

No:

- inventar contenido cuando exista en `info.json`,
- modificar arbitrariamente `design.json`,
- ignorar `seo.json`,
- sustituir los assets proporcionados sin necesidad,
- generar nuevas imágenes para reemplazar las aprobadas,
- duplicar información innecesariamente,
- crear URLs arbitrarias,
- generar páginas SEO vacías,
- duplicar componentes por provincia o destino,
- introducir una base de datos,
- instalar dependencias sin justificación,
- sacrificar performance por efectos visuales,
- utilizar React cuando Astro pueda resolver el problema,
- crear contenido artificial únicamente para SEO.

---

# 22. Prioridades

Ante cualquier decisión técnica utilizar este orden:

```text
1. SEO
2. Contenido útil
3. Performance
4. UX y accesibilidad
5. Fidelidad al diseño aprobado
6. Mantenibilidad
7. Interactividad
8. Animaciones
```

---

# 23. Validación antes del deploy

Antes de considerar finalizado el desarrollo:

## Build

Ejecutar:

```bash
npm run build
```

El build debe finalizar sin errores.

---

## Revisar

Validar como mínimo:

- Home funcional,
- mobile funcional,
- desktop funcional,
- navegación,
- links internos,
- imágenes,
- ausencia de assets rotos,
- metadata,
- canonical,
- sitemap,
- robots.txt,
- rutas generadas,
- ausencia de errores de consola relevantes,
- HTML semántico,
- comportamiento responsive.

---

## Verificar assets

Confirmar que se estén utilizando correctamente:

```text
logo_destinos_del_norte.png
hero_img.png

salta_que_hacer_card.png
jujuy_que_hacer_card.png
tucuman_que_hacer_card.png

seccion_atractivo_amicha.png
seccion_atractivo_cafayate.png
seccion_atractivo_cerro_7_colores.png
seccion_atractivo_purmamarca.png
seccion_atractivo_tafi_del_valle.png
seccion_atractivo_tilcara.png
```

No deben quedar placeholders si existe un asset definitivo para ese contenido.

---

# 24. GitHub

El repositorio remoto definitivo es:

```text
git@github.com:diegolu7/destinosdelnorte.git
```

Al finalizar satisfactoriamente el desarrollo y las validaciones:

1. verificar el estado de Git;
2. revisar los cambios finales;
3. evitar incluir archivos temporales o innecesarios;
4. realizar el commit correspondiente;
5. verificar que el remote apunte al repositorio indicado;
6. hacer push al repositorio.

No crear otro repositorio.

---

# 25. GitHub Pages

El sitio será publicado mediante:

```text
GitHub Pages
```

El proceso de **build y deployment ya está configurado mediante GitHub Actions**.

Por lo tanto:

- inspeccionar la configuración existente,
- respetarla,
- no crear un segundo workflow de deployment,
- no duplicar GitHub Actions,
- no reemplazar el pipeline existente salvo que exista un error real que impida desplegar.

La implementación de Astro debe ser compatible con el deployment existente.

Antes del push final, verificar especialmente:

- configuración de Astro,
- paths de assets,
- rutas públicas,
- base path si la configuración existente lo requiere,
- build estático,
- compatibilidad con GitHub Pages.

No asumir una nueva configuración si el repositorio ya posee una válida.

---

# 26. Deploy final

El último paso del trabajo será:

```text
Desarrollo
↓
Build correcto
↓
Validación
↓
Commit
↓
Push a git@github.com:diegolu7/destinosdelnorte.git
↓
GitHub Actions
↓
GitHub Pages
```

Después del push:

- comprobar el resultado del workflow existente;
- verificar que el deployment haya finalizado correctamente;
- si existe un error provocado por la implementación, corregirlo;
- mantener el workflow existente siempre que sea posible.

No considerar finalizada la tarea solamente porque el proyecto compile localmente.

La tarea termina cuando el código está correctamente preparado y enviado al repositorio para su publicación mediante el pipeline ya existente.

---

# 27. Resultado esperado

El resultado final debe ser una primera versión de **Destinos del Norte**:

- fiel a la referencia visual aprobada,
- utilizando los assets proporcionados,
- responsive,
- mobile-first,
- rápida,
- accesible,
- SEO-first,
- fácilmente indexable,
- mantenible,
- data-driven,
- simple de extender,
- preparada para crecer.

La evolución futura debe realizarse principalmente agregando contenido y datos, no reconstruyendo la arquitectura.

---

# 28. Instrucción principal de ejecución

Antes de implementar cualquier elemento seguir este flujo:

```text
1. Leer info.json
      ↓
   Determinar qué contenido debe existir.

2. Leer design.json
      ↓
   Determinar cómo debe verse.

3. Leer seo.json
      ↓
   Determinar cómo debe estructurarse e indexarse.

4. Revisar los assets PNG
      ↓
   Determinar qué recursos visuales ya fueron proporcionados.

5. Revisar tarea.md
      ↓
   Determinar cómo implementarlo técnicamente.

6. Implementar.

7. Validar.

8. Ejecutar build.

9. Commit + push.

10. Permitir que GitHub Actions despliegue en GitHub Pages.
```

No asumir ni inventar información cuando las fuentes del proyecto ya la proporcionen.

**`info.json`, `design.json`, `seo.json`, los assets aprobados y este `tarea.md` deben trabajar como un único sistema de especificación del proyecto.**
