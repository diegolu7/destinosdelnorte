import type { Lang } from "./i18n";

// TODO: reemplazar con las URLs reales que te pase el usuario.
export const SUPPORT_URLS = {
  koFi: "https://ko-fi.com/REEMPLAZAR_USUARIO",
  mercadoPago: "https://link.mercadopago.com.ar/REEMPLAZAR_ALIAS",
} as const;

export type SupportProvider = "ko-fi" | "mercado-pago";

const COPY = {
  es: {
    footer: "Apoyar el proyecto",
    compactTitle: "¿Te sirvió esta guía?",
    compactBody:
      "Explorar el Norte nos lleva tiempo e investigación real. Si lo que leíste te ayudó a planear tu viaje, considerá apoyar Destinos del Norte para que siga siendo gratuito y sin publicidad.",
    note: "Va al dominio, la fotografía y el tiempo de investigar y actualizar cada destino.",
    koFiLabel: "Apoyar con Ko‑fi",
    mpLabel: "Apoyar desde Argentina (Mercado Pago)",
    mpHint: "Argentina y varios países de Latinoamérica",
    panelTitle: "Ayudanos a mantener el Norte al alcance de todos",
    panelBody:
      "Este sitio es gratuito y sin anuncios. Lo que donás cubre el dominio y nos permite dedicar tiempo a investigar cada pueblo, ruta y experiencia.",
    cta: "Quiero apoyar",
    pageLeadTitle: "Todo lo que ves acá es gratis y sin publicidad.",
    pageLeadBody:
      "Destinos del Norte es una guía independiente del Noroeste Argentino, sin banners ni contenido pago. Si te sirve, podés devolver el gesto con una donación puntual: ayuda a cubrir el dominio y el tiempo de investigación detrás de cada guía.",
    valueTitle: "Lo que ya usás, sin costo",
    values: [
      "Guías reales de Salta, Jujuy y Tucumán (cómo llegar, mejor época, consejos).",
      "Reseñas honestas y destinos verificados por quien los recorrió.",
      "Contenido en español, inglés y portugués.",
      "Sin publicidad, sin newsletters invasivas.",
    ],
    howTitle: "Cómo apoyar",
    koFiLine: "Desde cualquier parte del mundo, con tarjeta o PayPal.",
    mpLine: "Si estás en Argentina o Latinoamérica, esta es la opción más simple.",
    whatTitle: "En qué se usa tu aporte",
    what: [
      "Dominio y hosting del sitio.",
      "Fotografía, permisos y salidas a campo.",
      "Tiempo de escribir y mantener al día cada destino y guía.",
    ],
    safeTitle: "Tranquilidad",
    safeBody:
      "El pago se procesa en Ko‑fi o Mercado Pago; este sitio no almacena ni accede a tus datos de pago. Una donación es puntual y sin compromiso.",
    thanksTitle: "¡Gracias por viajar con nosotros!",
  },
  en: {
    footer: "Support the project",
    compactTitle: "Was this guide useful?",
    compactBody:
      "Exploring the North takes real time and research. If what you read helped you plan your trip, consider supporting Destinos del Norte so it stays free and ad‑free.",
    note: "It goes to the domain, photography and the time spent researching and updating each destination.",
    koFiLabel: "Support with Ko‑fi",
    mpLabel: "Support from Argentina (Mercado Pago)",
    mpHint: "Argentina and several Latin American countries",
    panelTitle: "Help us keep the North within everyone's reach",
    panelBody:
      "This site is free and has no ads. Your donation covers the domain and lets us invest time researching every town, route and experience.",
    cta: "Support the project",
    pageLeadTitle: "Everything you see here is free and ad‑free.",
    pageLeadBody:
      "Destinos del Norte is an independent guide to the Argentine Northwest, with no banners or paid content. If it helps you, you can give back with a one‑time donation: it covers the domain and the research time behind every guide.",
    valueTitle: "What you already use, free",
    values: [
      "Real guides to Salta, Jujuy and Tucumán (how to get there, best time, tips).",
      "Honest reviews and destinations checked by those who traveled them.",
      "Content in Spanish, English and Portuguese.",
      "No ads, no pushy newsletters.",
    ],
    howTitle: "How to support",
    koFiLine: "From anywhere in the world, with card or PayPal.",
    mpLine: "If you are in Argentina or Latin America, this is the simplest option.",
    whatTitle: "Where your support goes",
    what: [
      "Domain and hosting of the site.",
      "Photography, permits and field trips.",
      "Time to write and keep every destination and guide up to date.",
    ],
    safeTitle: "Peace of mind",
    safeBody:
      "Payment is processed by Ko‑fi or Mercado Pago; this site never stores or accesses your payment data. A donation is one‑time and commitment‑free.",
    thanksTitle: "Thank you for traveling with us!",
  },
  pt: {
    footer: "Apoiar o projeto",
    compactTitle: "Esta guia foi útil?",
    compactBody:
      "Explorar o Norte exige tempo e pesquisa reais. Se o que você leu ajudou a planejar sua viagem, considere apoiar a Destinos del Norte para que continue gratuita e sem anúncios.",
    note: "Vai para o domínio, a fotografia e o tempo de pesquisar e atualizar cada destino.",
    koFiLabel: "Apoiar com Ko‑fi",
    mpLabel: "Apoiar da Argentina (Mercado Pago)",
    mpHint: "Argentina e vários países da América Latina",
    panelTitle: "Ajude a manter o Norte ao alcance de todos",
    panelBody:
      "Este site é gratuito e sem anúncios. Sua doação cobre o domínio e nos permite dedicar tempo a pesquisar cada vila, rota e experiência.",
    cta: "Quero apoiar",
    pageLeadTitle: "Tudo o que você vê aqui é grátis e sem anúncios.",
    pageLeadBody:
      "Destinos del Norte é um guia independente do Noroeste Argentino, sem banners nem conteúdo pago. Se for útil para você, pode retribuir com uma doação pontual: ela cobre o domínio e o tempo de pesquisa por trás de cada guia.",
    valueTitle: "O que você já usa, de graça",
    values: [
      "Guias reais de Salta, Jujuy e Tucumán (como chegar, melhor época, dicas).",
      "Avaliações honestas e destinos conferidos por quem viajou.",
      "Conteúdo em espanhol, inglês e português.",
      "Sem anúncios, sem newsletters invasivas.",
    ],
    howTitle: "Como apoiar",
    koFiLine: "De qualquer lugar do mundo, com cartão ou PayPal.",
    mpLine: "Se você está na Argentina ou na América Latina, esta é a opção mais simples.",
    whatTitle: "Para onde vai sua contribuição",
    what: [
      "Domínio e hospedagem do site.",
      "Fotografia, autorizações e viagens de campo.",
      "Tempo para escrever e manter atualizados cada destino e guia.",
    ],
    safeTitle: "Tranquilidade",
    safeBody:
      "O pagamento é processado pela Ko‑fi ou Mercado Pago; este site não armazena nem acessa seus dados de pagamento. Uma doação é pontual e sem compromisso.",
    thanksTitle: "Obrigado por viajar com a gente!",
  },
} as const;

export interface SupportCopy {
  footer: string;
  compactTitle: string;
  compactBody: string;
  note: string;
  koFiLabel: string;
  mpLabel: string;
  mpHint: string;
  panelTitle: string;
  panelBody: string;
  cta: string;
  pageLeadTitle: string;
  pageLeadBody: string;
  valueTitle: string;
  values: string[];
  howTitle: string;
  koFiLine: string;
  mpLine: string;
  whatTitle: string;
  what: string[];
  safeTitle: string;
  safeBody: string;
  thanksTitle: string;
}

export function supportCopy(lang: Lang): SupportCopy {
  return COPY[lang] as unknown as SupportCopy;
}

/** Orden de proveedores según idioma: es → Mercado Pago primero; en/pt → Ko‑fi primero. */
export function supportButtons(lang: Lang): { key: SupportProvider; label: string; href: string; hint?: string }[] {
  const c = supportCopy(lang);
  const koFi = { key: "ko-fi" as const, label: c.koFiLabel, href: SUPPORT_URLS.koFi };
  const mp = {
    key: "mercado-pago" as const,
    label: c.mpLabel,
    href: SUPPORT_URLS.mercadoPago,
    hint: c.mpHint,
  };
  return lang === "es" ? [mp, koFi] : [koFi, mp];
}

/** Ruta de la página de apoyo según idioma (misma slug para mantener el patrón espejo es/en/pt). */
export function supportPage(lang: Lang): string {
  return lang === "es" ? "/apoyar/" : `/${lang}/apoyar/`;
}
