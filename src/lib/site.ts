export const SITE = {
  name: "Destinos del Norte",
  description:
    "Descubrí destinos, lugares y experiencias turísticas de Salta, Jujuy y Tucumán.",
  url: "https://diegolu7.github.io/destinosdelnorte",
  locale: "es-AR",
  email: "delnorte.destinos@gmail.com",
  twitter: "@destinosdelnorte",
} as const;

export const NEWSLETTER_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwU8hIZKiJClmyRcEGBWeuEazjiBX_4BN49Dl0QORSpWxSDjnL-n7f_xIpg3uYyMhXUYQ/exec";

export const NEWSLETTER_TOKEN = "ddn-news-2026";

export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path.startsWith(base) || path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }
  return (base + "/" + path).replace(/\/{2,}/g, "/");
}

