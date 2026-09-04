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

## 8 · Propuesta de líder de producto (monetización / sostenibilidad)

### 8.1 Diagnóstico rápido
- Sitio **estático y gratuito** (GitHub Pages) con costos reales bajos pero crecientes: dominio `.ar`, tiempo de contenido y, a futuro, posible migración a hosting/analytics premium.
- Audiencia **internacional** (es/en/pt), mayormente **visitante de una sola vez** que consume guías SEO antes de viajar (bajo apego al sitio, alto valor en el momento exacto de lectura).
- Producto: contenido confiable y sin publicidad intrusiva = **activo de marca**. La monetización no debe dañar la confianza ni el SEO.

### 8.2 Estrategia recomendada (fases)
- **Fase 1 (recomendada, corto plazo): donaciones por suscripción de "gracias" con PayPal.**
  - Un botón **PayPal Donate** (no necesita backend, se integra por URL en sitio estático) + enlace **Mercado Pago** para donantes argentinos (región del owner). Alternativa global sin plataforma extra.
  - Ubicación de alta conversión y baja fricción: pie de página (ícono discreto), bloque en "Sobre nosotros" y **CTA contextual al final de las guías más leídas** (cómo llegar / mejor época) y del blog. Pedir solo cuando ya se entregó valor.
  - Copy neutral en los 3 idiomas (keys en `ui.ts`), p. ej. "¿Te sirvió esta guía? Apoyá Destinos del Norte para seguir creciendo".
  - **Nunca** popups ni interstitials que tapen contenido (dañan SEO/UX).
- **Fase 2 (mediana): medir y optimizar** — evento GA4 `donation_click` (gtag) para ver qué página/idioma convierte; A/B del mensaje y posición.
- **Fase 3 (a futuro, solo si hay tráfico alto):**
  - Afiliación turística (transporte/seguros/alojamiento) — alto valor editorial pero exige cuidado con la confianza y disclosures.
  - Suscripción/membresía (Patreon/Ko-fi Gold) solo cuando exista comunidad estable.
  - Publicidad display: **evitar** mientras el sitio no supere decenas de miles de visitas/mes; degrada la experiencia.

### 8.3 Análisis de opciones (Fase 1)
| Opción | Pros | Contras | Veredicto |
|---|---|---|---|
| **PayPal Donate** | Universal (cubre donantes internacionales es/en/pt), botón estático sin backend, sin suscripción para el donante, fees bajos en donaciones | Requiere cuenta PayPal del owner (en AR se puede recibir, retiro con tipo de cambio propio) | **Recomendado** |
| **Mercado Pago** | Cero fricción para donantes argentinos/regional | No lo tienen visitantes de otros países | Complemento para AR |
| **Ko-fi / Buy Me a Coffee** | Muy simple, bonito, sin fees en donaciones (Ko-fi) | Página de terceros (abandono), recolecta datos, menos "profesional" | Alternativa si no se quiere gestionar PayPal |
| **Patreon** | Comunidad/recurrente | Exige contenido exclusivo y constancia; overkill hoy | No por ahora |
| **GitHub Sponsors** | Cero fees, visibilidad dev | Solo si existiera comunidad técnica; irrelevante para turismo | Descartar |
| **Ads (AdSense)** | Ingreso "pasivo" | UX/SEO negativo, requiere volumen y aplicar consentimiento (GDPR) | Fase 3+ |

### 8.4 Plan de implementación (checklist)
- [ ] Crear cuenta/credenciales PayPal (botón Donate) y/o enlace Mercado Pago; definir `SUPPORT_URLS` en `src/lib/site.ts` (paypal, mercado pago opcional).
- [ ] Agregar keys de UI en `ui.ts` (es/en/pt): título "Apoyar el proyecto", copy y label del botón.
- [ ] Componente `SupportButton.astro` (enlace externo `rel="noopener noreferrer"`, ícono, discreto) y ubicarlo en: Footer, sobre nosotros (es/en/pt) y CTA final de guías/blog.
- [ ] Registrar evento GA4: `gtag('event','donation_click',{location, lang})` solo en PROD (BaseLayout/script inline en el botón).
- [ ] Test manual en los 3 idiomas (link abre ventana correcta) + `npm run build`/`check`.
- [ ] **Medición posterior (30 días)**: clics, página e idioma que convierten; decidir si se agrega afiliación (Fase 3).

### 8.5 Cumplimiento / confianza
- Etiquetar siempre como **"donación / apoyo"** (no venta de bienes/servicios); sin promesas de beneficios a cambio.
- Política de privacidad: indicar que el pago se procesa en PayPal/Mercado Pago bajo sus propios términos (no almacenamos datos de pago).
- No usar patrones oscuros (no "recordatorios" agresivos); un solo pedido contextual por página.

---

## Nota de historial git
El proyecto acumula trabajo local; verificar siempre que el push esté al día (`git status`/`git push`) antes de darlo por cerrado.
