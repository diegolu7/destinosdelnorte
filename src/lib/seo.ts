import type { Lang } from "./i18n";

export const SITE_BRAND = "Destinos del Norte";
export const REGION_ES = "Noroeste Argentino";
export const COUNTRY = "Argentina";

/** Recorta a N palabras/caracteres manteniendo oraciones legibles para <meta description>. */
export function truncateDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.]$/, "") + "…";
}

export const AR_NORTE: Record<Lang, string> = {
  es: "Noroeste Argentino",
  en: "Argentine Northwest",
  pt: "Noroeste Argentino",
};

/** Áreas servidas para schema Organization (nombres locales). */
export function areaServed(lang: Lang): { "@type": string; name: string }[] {
  const names: Record<Lang, string[]> = {
    es: ["Argentina", "Noroeste Argentino", "Salta", "Jujuy", "Tucumán"],
    en: ["Argentina", "Argentine Northwest", "Salta", "Jujuy", "Tucumán"],
    pt: ["Argentina", "Noroeste Argentino", "Salta", "Jujuy", "Tucumán"],
  };
  return names[lang].map((name) => ({ "@type": "Place", name }));
}

export function destinoTitle(lang: Lang, name: string, prov: string): string {
  const t: Record<Lang, string> = {
    es: `Qué hacer en ${name} · ${prov}, Argentina`,
    en: `Things to do in ${name} · ${prov}, Argentina`,
    pt: `O que fazer em ${name} · ${prov}, Argentina`,
  };
  return t[lang];
}

export function destinoDescription(lang: Lang, opts: { intro: string; name: string; prov: string; places?: string[] }): string {
  const intro = opts.intro.replace(/\s+/g, " ").trim();
  const head: Record<Lang, string> = {
    es: `${intro} ${opts.name} está en ${opts.prov}, Argentina, en el Noroeste Argentino.`,
    en: `${intro} ${opts.name} is in ${opts.prov}, Argentina, in the Argentine Northwest.`,
    pt: `${intro} ${opts.name} fica em ${opts.prov}, Argentina, no Noroeste Argentino.`,
  };
  let out = head[lang];
  if (opts.places?.length) {
    out += ` ${opts.places.join(", ")}.`;
  }
  return truncateDescription(out, 160);
}

export function provinciaTitle(lang: Lang, prov: string): string {
  const t: Record<Lang, string> = {
    es: `Qué hacer en ${prov} · ${prov}, Argentina – Noroeste Argentino`,
    en: `Things to do in ${prov} · ${prov}, Argentina – Argentine Northwest`,
    pt: `O que fazer em ${prov} · ${prov}, Argentina – Noroeste Argentino`,
  };
  return t[lang];
}

export function provinciaDescription(lang: Lang, opts: { intro: string; prov: string; destinos?: string[] }): string {
  const intro = opts.intro.replace(/\s+/g, " ").trim();
  const head: Record<Lang, string> = {
    es: `${intro} ${opts.prov}, Argentina, en el Noroeste Argentino.`,
    en: `${intro} ${opts.prov}, Argentina, in the Argentine Northwest.`,
    pt: `${intro} ${opts.prov}, Argentina, no Noroeste Argentino.`,
  };
  let out = head[lang];
  if (opts.destinos?.length) {
    out += ` Lugares para visitar: ${opts.destinos.slice(0, 5).join(", ")}.`;
  }
  return truncateDescription(out, 160);
}
