#!/usr/bin/env node
/**
 * check-i18n-structure.mjs
 * Garantiza que ES (fuente de verdad) y sus espejos EN/PT compartan el MISMO
 * esqueleto DOM (tags + clases) en <body>. Ignora texto, ids, href/src/alt,
 * lang, hreflang, fechas y <head> (solo se compara lo estructural).
 *
 * Uso: node scripts/check-i18n-structure.mjs   (requiere dist/ ya generado)
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const DIST = resolve("dist");

/** Devuelve el listado de rutas ES con su index.html en dist. */
function esRoutes() {
  const out = [];
  const walk = (dir, prefix) => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      const st = statSync(full);
      if (st.isDirectory() && entry !== "en" && entry !== "pt") {
        walk(full, `${prefix}/${entry}`);
      } else if (st.isFile() && entry === "index.html") {
        out.push({ html: full, path: prefix === "" ? "/" : prefix });
      }
    }
  };
  walk(DIST, "");
  return out;
}

/** Normaliza clases cuyo valor cambia legítimamente con el idioma:
 *  el LangSwitcher marca el idioma ACTIVO con estilos distintos por página. */
const SWITCH_TOKENS = new Set(["text-terracota", "text-navy", "underline", "underline-offset-4", "hover:text-terracota"]);

/** Colapsa el interior de los contenedores prose-norte (contenido markdown cuya
 *  enfatización/link inline puede variar legítimamente entre traducciones). */
function collapseProse(body) {
  const re = /(<(div|ul|p)\b[^>]*class="[^"]*prose-norte[^"]*"[^>]*>)[\s\S]*?(<\/\2>)/g;
  let prev;
  do {
    prev = body;
    body = body.replace(re, "$1$3");
  } while (body !== prev);
  return body;
}

/** Esqueleto: tags con su class, sin texto ni atributos que varíen por idioma. */
function skeleton(htmlFile) {
  const html = readFileSync(htmlFile, "utf8")
    .replace(/<!doctype[^>]*>/i, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");
  let body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  body = collapseProse(body);
  const tokens = [];
  const re = /<\/?([a-zA-Z][a-zA-Z0-9]*)((?:\s+[a-zA-Z-]+(?:\s*=\s*"[^"]*")?)*)\s*\/?>/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const isClose = m[0].startsWith("</");
    const tag = m[1];
    const attrs = m[2] ?? "";
    const classMatch = attrs.match(/class\s*=\s*"([^"]*)"/);
    let cls = classMatch ? classMatch[1].trim().split(/\s+/).filter(Boolean) : [];
    const isSwitcher = tag === "a" && cls.includes("px-1.5") && cls.includes("rounded-md");
    if (isSwitcher) cls = cls.filter((c) => !SWITCH_TOKENS.has(c));
    cls = cls.sort().join(" ");
    tokens.push(isClose ? `</${tag}>` : `<${tag}${cls ? ` .${cls.replace(/ /g, ".")}` : ""}>`);
  }
  return tokens.join("\n");
}

function mirror(path, locale) {
  if (path === "/") return `${DIST}/${locale}/index.html`;
  return `${DIST}/${locale}${path}/index.html`;
}

function existsMirror(file) {
  return existsSync(file);
}

const routes = esRoutes();
let divergencias = 0;
const report = [];

for (const { html, path } of routes) {
  const enFile = mirror(path, "en");
  const ptFile = mirror(path, "pt");
  const esSk = skeleton(html);

  const missing = [];
  if (!existsMirror(enFile)) missing.push("EN");
  if (!existsMirror(ptFile)) missing.push("PT");
  if (missing.length) {
    divergencias++;
    report.push({ path, tipo: "sin-espejo", detalle: missing.join(", ") });
    continue;
  }

  const enSk = skeleton(enFile);
  const ptSk = skeleton(ptFile);
  const diffs = [];
  if (esSk !== enSk) diffs.push("EN");
  if (esSk !== ptSk) diffs.push("PT");
  if (diffs.length) {
    divergencias++;
    report.push({ path, tipo: "estructura-distinta", detalle: diffs.join(", ") });
  }
}

console.log(`\n=== check-i18n-structure (ES fuente de verdad) ===`);
console.log(`Rutas ES comparadas: ${routes.length}`);
console.log(`Rutas con divergencia: ${divergencias}\n`);
for (const r of report) {
  console.log(`  [${r.tipo}] ${r.path}  -> ${r.detalle}`);
}

console.log(divergencias === 0 ? "\nOK: es/en/pt comparten estructura idéntica.\n" : `\nFALTAN alinear ${divergencias} ruta(s).\n`);
process.exit(divergencias === 0 ? 0 : 1);
