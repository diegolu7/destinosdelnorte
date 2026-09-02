# Newsletter con Google Sheets (Apps Script)

Conecta el formulario de newsletter del footer con una hoja de Google. El frontend envía `{ email, dispositivo, origen }` en JSON y el script agrega una fila con:

```text
email | fecha | dispositivo | origen
```

La **fecha** la genera Google Apps Script en la zona horaria **`America/Argentina/Salta`** (no se envía desde el sitio).

---

## Endpoint (App Web)

```text
https://script.google.com/macros/s/AKfycbzw5GGgSG0nZbkvI6XusJY3CysNFYEZUyDr7gpUpBcgzksD6AmaL9I2oZFPKeBjjrbs/exec
```

---

## Estructura esperada

Pestaña `Newsletter` con columnas: `email | fecha | dispositivo | origen`.

Ejemplo de fila resultante:

```text
usuario@gmail.com | 02/09/2026 19:15:32 | Mobile | /
```

---

## Código de referencia (Apps Script `doPost`)

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Newsletter") || ss.getSheets()[0];
    var data = JSON.parse(e.postData.contents);
    var email = String(data.email || "").trim();
    var dispositivo = String(data.dispositivo || "Desktop");
    var origen = String(data.origen || "/");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false });
    }

    var fecha = Utilities.formatDate(
      new Date(),
      "America/Argentina/Salta",
      "dd/MM/yyyy HH:mm:ss",
    );

    sheet.appendRow([email, fecha, dispositivo, origen]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false });
  } finally {
    lock.releaseLock();
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

> Guardá y **re-publicá** la aplicación web (Implementar → Nueva implementación → Aplicación web → **Ejecutar como: Yo** · **Quién tiene acceso: Cualquier persona**). Copiá la **URL** y actualizala en `src/lib/site.ts` (`NEWSLETTER_ENDPOINT`).

---

## Publicar como aplicación web

1. En la hoja: **Extensiones → Apps Script** → pegá el `doPost` → Guardar.
2. **Implementar → Nueva implementación → Aplicación web**.
3. **Ejecutar como**: `Yo` · **Quién tiene acceso**: `Cualquier persona` → **Implementar**.
4. Copiá la URL de la aplicación web (termina en `/exec`).

---

## Notas

- El frontend envía JSON con `fetch` (método POST). La fecha **no** se manda desde el sitio.
- El formulario valida el email, muestra estado de carga, evita dobles envíos y limpia el input al tener éxito.
- Recordá **actualizar la política de privacidad** si cambia el tratamiento de los datos.
