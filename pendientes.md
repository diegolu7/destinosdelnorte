# Pendientes y evolutivos — Destinos del Norte

Lista de tareas pendientes y futuras del proyecto. Se actualiza a medida que se avanzan.

---

## 1 · Dominio y despliegue

- [x] Registros A de `destinosdelnorte.ar` en Cloudflare apuntando a GitHub Pages.
- [x] Dominio activo en GitHub Pages (`destinosdelnorte.ar`) + HTTPS.
- [x] Sitio cargando en `https://destinosdelnorte.ar/` (base `/` + CNAME + site).

---

## 2 · Google Sheets — newsletter y contacto (validar)

- [ ] **Newsletter**: confirmar un envío **anónimo** (incógnito, deslogueado) y que la fila aparezca en la pestaña `Newsletter`.
- [ ] **Contacto**: confirmar envío anónimo y que la fila aparezca en la pestaña `Contacto`.
- [ ] Revisar **Apps Script → Ejecuciones** si algo falla (403 anónimo suele ser acceso de la App Web o cuenta de Workspace).

---

## 3 · Analítica

- [x] **Microsoft Clarity**: activo en producción (Project ID `ycb8sew0r9`).
- [x] **Google Analytics (GA4)**: activo en producción (`G-CNXSRBFY99`).

---

## 4 · Privacidad / consentimiento

- [ ] Evaluar un **aviso de consentimiento de cookies** para visitantes de la **UE (GDPR)**, ya que se usan Clarity y (a futuro) GA4.
- [ ] Revisar la política de privacidad ante cualquier cambio de tratamiento de datos.

---

## 5 · Limpieza / contenido (opcional)

- [ ] Revisar **assets sin uso** (p. ej. `seccion_atractivo_purmamarca.png`, `que_hacer_card_placeholder.webp`) y eliminarlos si no se referencian.
- [ ] Validar que los artículos del blog con `imagen: "hero_img.*"` no dependan de una imagen inexistente (el blog no renderiza imagen aún).
- [ ] Completar contenido pendiente de la Épica 3 / fases futuras cuando corresponda.

---

## 6 · Épica 4 (ideas, a futuro)

- [ ] Empresas turísticas (monetización / publicidad).
- [ ] Página hub regional "Norte Argentino" + `TouristAttraction`.
- [ ] Landing propia por experiencia.

---

## 7 · Internacionalización (EN ✓ — PT pendiente)

### Hecho (EN completo, en producción)
- [x] Arquitectura i18n: `src/lib/i18n.ts` (locales es/en/pt, `localeHref`), `ui.ts` (dict chrome), `LangSwitcher`, `html lang` + hreflang en `BaseLayout`.
- [x] Contenido EN bajo `/en/`: Home, 3 provincias, 13 destinos, 26 guías, 4 rutas, 5 posts blog, 11 FAQ, sobre nosotros, contacto, política de privacidad, búsqueda.
- [x] Colecciones por idioma (evitan colisión del `slug`/id reservado): `provinciasEn`, `destinosEn`, `guiasEn`, `rutasEn`, `blogEn`, `faqsEn`.
- [x] `ContactForm` y `Newsletter` localizados (es/en/pt) vía prop `lang` + dict en el `<script>`.
- [x] Nav/footer/breadcrumbs y `ProvinceCard` locale-aware (`localeHref`).

### Cómo funciona el patrón EN (a replicar en PT)
1. Carpeta propia por colección: `src/content/<coleccion>-en/` → para PT `-pt/`.
2. Colección hermana en `content.config.ts` con el **mismo schema**; registrar en `export const collections`.
3. Páginas espejo bajo `src/pages/en/...` → para PT `src/pages/pt/...`, con `lang="pt"` y `t(lang, …)`.
4. Id de archivo = basename (rutas planas) o `carpeta/basename` (subcarpetas); **no** usar campo `slug` (reservado).
5. Links internos en el cuerpo MD usan prefijo de idioma (`/pt/…`).

### Roadmap PT (por bloques, 1 sesión cada uno)
- [ ] **Fase A — PT base**: colecciones `provinciasPt` + traducción de provincias; páginas `/pt/{provincia}/`. Sin destinos aún → la página de provincia debe **no** listar destinos no traducidos (o listar solo los existentes en PT) para evitar 404.
- [ ] **Fase B — PT destinos**: colección `destinosPt` (13), páginas `/pt/{prov}/{slug}/`; recién ahí enlazar cards desde provincias/Home.
- [ ] **Fase C — PT guías**: colección `guiasPt` (26) + sección "Travel guides" en páginas destino PT.
- [ ] **Fase D — PT rutas + blog + FAQ**: `rutasPt`, `blogPt`, `faqsPt` + páginas `/pt/…`.
- [ ] **Fase E — PT estáticas**: sobre nosotros, contacto, privacidad, búsqueda; textos de rutas con links internos `/pt/…`.
- [ ] **Fase F — cierre**: activar `I18N_SWITCHER_ENABLED = true`; auditar hreflang para que no apunte a páginas inexistentes; `astro check` + verificar que `es` y `en` sigan intactos.

> Nota: traducir **después** de cada fase con `npm run check` y `npm run build`; commitear y pushear por bloque. El selector de idioma permanece oculto hasta que PT cubra las páginas principales.

---

## Nota de historial git
El proyecto acumula trabajo local; verificar siempre que el push esté al día (`git status`/`git push`) antes de darlo por cerrado.
