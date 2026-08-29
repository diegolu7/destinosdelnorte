# Newsletter con Google Sheets (Apps Script)

Guía para conectar el formulario de newsletter del sitio con una hoja de Google, usando **Google Apps Script** como puente. Es **gratuito** y no requiere servidor propio.

---

## Paso 1 · Crear la hoja de Google

1. Creá una **hoja de cálculo** en Google Sheets (o usá una existente).
2. Renombrá la primera pestaña a **`Newsletter`**.
3. En la fila 1, colocá los encabezados: `fecha` | `email`.

---

## Paso 2 · Agregar el código (Apps Script)

En la hoja, andá a **Extensiones → Apps Script** y pegá el siguiente código completo:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Newsletter");
    var data = JSON.parse(e.postData.contents);
    var email = String(data.email || "").trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow([new Date(), email]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

> Guardá el proyecto (ícono de disco o Ctrl/Cmd+S) y dale un nombre.

---

## Paso 3 · Publicar como aplicación web

1. Arriba a la derecha, click en **Implementar → Nueva implementación**.
2. Tipo: **Aplicación web**.
3. Configuración:
   - **Ejecutar como**: `Yo` (tu cuenta de Google).
   - **Quién tiene acceso**: `Cualquier persona`.
4. Click en **Implementar** y, si pide autorización, aceptá los permisos.
5. Copiá la **URL de la aplicación web**:
   `https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXX/exec`

> Ese URL es el **endpoint** que usará el formulario del sitio.

---

## Paso 4 · Probar

Para probar la función podés enviar un `POST` con el siguiente cuerpo (por ejemplo desde Postman, o un `fetch` en la consola del navegador):

```json
{
  "email": "tu@email.com"
}
```

Si funciona, la fila aparece en la pestaña `Newsletter` de la hoja.

---

## Notas

- El endpoint es público: se valida el formato del email en el script para evitar basura.
- El sitio envía el email con `fetch` (modo `no-cors` por las restricciones de CORS de Apps Script), por lo que se muestra **éxito optimista** aunque el script no devuelva el cuerpo a la página.
- Recordá **actualizar la política de privacidad** y agregar **consentimiento** en el formulario, ya que ahora se recolectan emails.
