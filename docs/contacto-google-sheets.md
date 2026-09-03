# Formulario de Contacto con Google Sheets (Apps Script)

Conecta el formulario de contacto de la página `/contacto/` con una hoja de Google. El frontend envía en JSON:

```text
{ nombre, email, mensaje, dispositivo, origen }
```

y el script agrega una fila con:

```text
nombre | email | mensaje | fecha | dispositivo | origen
```

La **fecha** la genera Google Apps Script en la zona horaria **`America/Argentina/Salta`** (no se envía desde el sitio).

---

## Paso 1 · Crear la hoja

1. Creá una hoja de cálculo (o usá la que ya tenés para el newsletter).
2. Agregá una pestaña llamada **`Contacto`**.
3. En la fila 1, colocá los encabezados:

```text
nombre | email | mensaje | fecha | dispositivo | origen
```

---

## Paso 2 · Agregar el código (Apps Script)

En la hoja, andá a **Extensiones → Apps Script** y pegá el siguiente código completo:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Contacto") || ss.getSheets()[0];

    var data = JSON.parse(e.postData.contents);
    var nombre = String(data.nombre || "").trim();
    var email = String(data.email || "").trim();
    var mensaje = String(data.mensaje || "").trim();
    var dispositivo = String(data.dispositivo || "Desktop");
    var origen = String(data.origen || "/");

    // Validación
    if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !mensaje) {
      return json({ ok: false });
    }

    var fecha = Utilities.formatDate(
      new Date(),
      "America/Argentina/Salta",
      "dd/MM/yyyy HH:mm:ss",
    );

    sheet.appendRow([nombre, email, mensaje, fecha, dispositivo, origen]);
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

> Guardá el proyecto (Ctrl/Cmd+S) y dale un nombre.

---

## Paso 3 · Publicar como aplicación web

1. **Implementar → Nueva implementación → Aplicación web**.
2. **Ejecutar como**: `Yo`.
3. **Quién tiene acceso**: `Cualquier persona`.
4. Click en **Implementar** y aceptá los permisos si los pide.
5. Copiá la **URL de la aplicación web** (termina en `/exec`).

> La URL se pega en `src/lib/site.ts` en la constante `CONTACT_ENDPOINT`.

---

## Paso 4 · Probar

Desde el navegador (consola) o el propio formulario, enviar:

```json
{
  "nombre": "Juan",
  "email": "juan@example.com",
  "mensaje": "Hola, quiero info sobre Cafayate",
  "dispositivo": "Desktop",
  "origen": "/contacto/"
}
```

Debería aparecer una fila en la pestaña `Contacto`:

```text
Juan | juan@example.com | Hola, quiero info... | 02/09/2026 19:15:32 | Desktop | /contacto/
```

---

## Notas

- La fecha **no** se envía desde el sitio; la genera el script en `America/Argentina/Salta`.
- El formulario valida los campos, evita dobles envíos y muestra estados de éxito/error.
- Recordá **actualizar la política de privacidad**: se guardan `nombre`, `email` y `mensaje`.
