# Pendientes y evolutivos — Destinos del Norte

Lista de tareas pendientes y futuras del proyecto. Se actualiza a medida que se avanzan.

---

## 1 · Dominio y despliegue (en curso)

- [ ] Confirmar que los **registros A** de `destinosdelnorte.ar` estén en Cloudflare (los 4 → IP de GitHub Pages `185.199.108.153/109/110/111`, nube **gris / DNS only**).
- [ ] Esperar la **propagación** del DNS (verificar con `dig destinosdelnorte.ar`).
- [ ] Activar el dominio en **GitHub → Settings → Pages → Custom domain** (`destinosdelnorte.ar`) y **Enforce HTTPS**.
- [ ] Verificar que el sitio cargue en `https://destinosdelnorte.ar/` y que `.github.io` redirija.

> El sitio ya está configurado para el dominio (base `/` + CNAME + site). Falta que el DNS resuelva.

---

## 2 · Google Sheets — newsletter y contacto (validar)

- [ ] **Newsletter**: confirmar un envío **anónimo** (incógnito, deslogueado) y que la fila aparezca en la pestaña `Newsletter`.
- [ ] **Contacto**: confirmar envío anónimo y que la fila aparezca en la pestaña `Contacto`.
- [ ] Revisar **Apps Script → Ejecuciones** si algo falla (403 anónimo suele ser acceso de la App Web o cuenta de Workspace).

---

## 3 · Analítica

- [ ] **Microsoft Clarity**: ya agregado en producción (Project ID `ycb8sew0r9`). Verificar que captura sesiones/heatmaps cuando el dominio esté activo.
- [ ] **Google Analytics (GA4)**: pendiente — falta el **Measurement ID** (`G-XXXXXXXXXX`). Agregar el gtag en `BaseLayout` (con `async`) cuando se tenga.

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

## Nota de historial git
El proyecto acumula trabajo local; verificar siempre que el push esté al día (`git status`/`git push`) antes de darlo por cerrado.
