export const LOCALES = {
  es: { label: "Español", short: "ES", flag: "🇦🇷", lang: "es-AR", prefix: "" },
  en: { label: "English", short: "EN", flag: "🇺🇸", lang: "en", prefix: "/en" },
  pt: { label: "Português", short: "PT", flag: "🇧🇷", lang: "pt-BR", prefix: "/pt" },
} as const;

export type Lang = keyof typeof LOCALES;
export const DEFAULT_LANG: Lang = "es";

// Habilita el selector de idioma (cobertura es/en/pt completa en páginas principales).
export const I18N_SWITCHER_ENABLED = true;

export function langFromPath(path: string): Lang {
  const first = path.split("/")[1];
  if (first === "en") return "en";
  if (first === "pt") return "pt";
  return "es";
}

export function stripLang(path: string): string {
  const lang = langFromPath(path);
  if (lang === "es") return path;
  const without = path.replace(new RegExp("^/" + lang), "");
  return without === "" ? "/" : without;
}

export function localeHref(path: string, lang: Lang): string {
  const base = stripLang(path);
  const prefix = LOCALES[lang].prefix;
  if (prefix === "") return base;
  return prefix + base;
}

export function isCurrentLang(path: string, lang: Lang): boolean {
  return langFromPath(path) === lang;
}
