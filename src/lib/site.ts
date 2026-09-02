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
  "https://script.google.com/macros/s/AKfycbzw5GGgSG0nZbkvI6XusJY3CysNFYEZUyDr7gpUpBcgzksD6AmaL9I2oZFPKeBjjrbs/exec";

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

