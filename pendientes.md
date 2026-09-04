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

## 7 · Internacionalización (EN ✓ — PT ✓)

### Hecho (completo, en producción)
- [x] Arquitectura i18n: `src/lib/i18n.ts` (locales es/en/pt, `localeHref`, `I18N_SWITCHER_ENABLED=true`), `ui.ts` (dict chrome), `LangSwitcher`, `html lang` + hreflang absolutos en `BaseLayout`.
- [x] Contenido EN bajo `/en/`: Home, 3 provincias, 13 destinos, 26 guías, 4 rutas, 5 posts blog, 11 FAQ, sobre nosotros, contacto, privacidad, búsqueda.
- [x] Contenido PT bajo `/pt/` (mismo alcance completo): `provinciasPt`, `destinosPt`, `guiasPt`, `rutasPt`, `blogPt`, `faqsPt` + páginas estáticas y Home PT.
- [x] Colecciones por idioma (evitan colisión del `slug`/id reservado): sufijos `-En` / `-Pt`.
- [x] `ContactForm`, `Newsletter`, `ProvinceCard`, `Breadcrumbs`, Header/Footer locale-aware (es/en/pt).
- [x] hreflang absolutos (`es-AR`, `en`, `pt-BR`, `x-default`); `LangSwitcher` activo.

### Pendientes menores (opcional)
- [ ] Auditar 1:1 que ningún link interno (es/en/pt) apunte a páginas inexistentes (spot-check por idioma).
- [ ] Revisar textos del `ui.ts` (dict chrome) cuando se traduzcan nuevas secciones.

---

## Nota de historial git
El proyecto acumula trabajo local; verificar siempre que el push esté al día (`git status`/`git push`) antes de darlo por cerrado.
