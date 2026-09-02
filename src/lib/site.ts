export const SITE = {
  name: "Destinos del Norte",
  description:
    "Descubrí destinos, lugares y experiencias turísticas de Salta, Jujuy y Tucumán.",
  url: "https://destinosdelnorte.ar",
  locale: "es-AR",
  email: "delnorte.destinos@gmail.com",
  twitter: "@destinosdelnorte",
} as const;

export const NEWSLETTER_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyqweLAau-iP2-9ub4qgaKJm3Dldv5SMeibXYoannZ9_jNhEx55NJrh9-TMeF7l8d7p/exec";

// Pendiente: pegar la URL del Web App de Contacto (ver docs/contacto-google-sheets.md)
export const CONTACT_ENDPOINT = "";

export function baseDir(): string {
  const b = import.meta.env.BASE_URL;
  return b === "/" || b === "" ? "" : b;
}

export function url(path: string): string {
  const base = baseDir();
  if (base && path.startsWith(base)) return path;
  if (path.startsWith("http") || path.startsWith("mailto:")) return path;
  return base + path;
}

