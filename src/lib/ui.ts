import type { Lang } from "./i18n";

export const UI = {
  es: {
    nav: {
      queHacer: "Qué hacer",
      destinos: "Destinos",
      guias: "Guías de viaje",
      rutas: "Rutas",
      blog: "Blog",
      contacto: "Contacto",
      buscar: "Buscar",
      guiasPorProvincia: "Guías por provincia",
    },
    common: {
      verTodos: "Ver todos",
      verTodosDestinos: "Ver todos los destinos",
      verTodasExperiencias: "Ver todas las experiencias",
      dias: "días",
    },
  },
  en: {
    nav: {
      queHacer: "Things to do",
      destinos: "Destinations",
      guias: "Travel guides",
      rutas: "Routes",
      blog: "Blog",
      contacto: "Contact",
      buscar: "Search",
      guiasPorProvincia: "Guides by province",
    },
    common: {
      verTodos: "See all",
      verTodosDestinos: "See all destinations",
      verTodasExperiencias: "See all experiences",
      dias: "days",
    },
  },
  pt: {
    nav: {
      queHacer: "O que fazer",
      destinos: "Destinos",
      guias: "Guias de viagem",
      rutas: "Rotas",
      blog: "Blog",
      contacto: "Contato",
      buscar: "Buscar",
      guiasPorProvincia: "Guias por província",
    },
    common: {
      verTodos: "Ver todos",
      verTodosDestinos: "Ver todos os destinos",
      verTodasExperiencias: "Ver todas as experiências",
      dias: "dias",
    },
  },
} as const;

export function t(lang: Lang, key: string): string {
  const seg = key.split(".");
  let node: any = UI[lang];
  for (const s of seg) {
    node = node?.[s];
    if (node === undefined) break;
  }
  return typeof node === "string" ? node : key;
}

export function provinciaLabel(lang: Lang, name: string): string {
  const names: Record<string, Record<Lang, string>> = {
    Salta: { es: "Salta", en: "Salta", pt: "Salta" },
    Jujuy: { es: "Jujuy", en: "Jujuy", pt: "Jujuy" },
    "Tucumán": { es: "Tucumán", en: "Tucumán", pt: "Tucumán" },
  };
  return names[name]?.[lang] ?? name;
}
