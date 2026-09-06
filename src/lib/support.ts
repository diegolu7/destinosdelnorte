import type { Lang } from "./i18n";

export const SUPPORT_URLS = {
  koFi: "https://ko-fi.com/destinosdelnorte",
} as const;

// Datos públicos para recibir transferencias (Argentina, vía CVU Mercado Pago).
export const SUPPORT_BANK = {
  titular: "Diego Fernando Luis Castro",
  cuit: "23-36128179-9",
  cvu: "0000003100043255045190",
  alias: "destinos.norte",
} as const;

export type SupportProvider = "ko-fi" | "bank-transfer";

const COPY = {
  es: {
    footer: "Apoyar el proyecto",
    compactTitle: "¿Te sirvió esta guía?",
    compactBody:
      "Explorar el Norte nos lleva tiempo e investigación real. Si lo que leíste te ayudó a planear tu viaje, considerá apoyar Destinos del Norte para que siga siendo gratuito y sin publicidad.",
    note: "Va al dominio y al tiempo de investigar y actualizar cada destino.",
    koFiLabel: "Apoyar con Ko‑fi",
    mpLabel: "Apoyar por transferencia (Argentina)",
    mpLine:
      "Transferencia bancaria vía CVU (Mercado Pago), sin costo para el donante. Ideal desde Argentina.",
    mpHint: "Transferencia desde Argentina",
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
    mpLine2: "Si estás en Argentina, una transferencia simple y sin costo.",
    whatTitle: "En qué se usa tu aporte",
    what: [
      "Dominio y hosting del sitio.",
      "Tiempo de escribir y mantener al día cada destino y guía.",
    ],
    safeTitle: "Tranquilidad",
    safeBody:
      "Las donaciones con Ko‑fi se procesan en esa plataforma. Si elegís transferencia, vas a tu banco o Mercado Pago y enviás el monto al CVU/alias indicado. Este sitio no almacena ni accede a tus datos bancarios.",
    thanksTitle: "¡Gracias por viajar con nosotros!",
    bankTitle: "Apoyar con transferencia",
    bankNote:
      "Desde tu banco o app de Mercado Pago: buscá la opción “transferir”, pegá el CVU o el alias y enviá el monto. Titular y CUIT son los del destino de la transferencia.",
    bankTitular: "Titular",
    bankCuit: "CUIT / CUIL",
    bankCvu: "CVU",
    bankAlias: "Alias",
    copyLabel: "Copiar",
    copiedLabel: "¡Copiado!",
  },
  en: {
    footer: "Support the project",
    compactTitle: "Was this guide useful?",
    compactBody:
      "Exploring the North takes real time and research. If what you read helped you plan your trip, consider supporting Destinos del Norte so it stays free and ad‑free.",
    note: "It goes to the domain and the time spent researching and updating each destination.",
    koFiLabel: "Support with Ko‑fi",
    mpLabel: "Support by bank transfer (Argentina)",
    mpLine:
      "Bank transfer via CVU (Mercado Pago), free of charge for the donor. Best from Argentina.",
    mpHint: "Bank transfer from Argentina",
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
    mpLine2: "If you are in Argentina, a simple, free bank transfer.",
    whatTitle: "Where your support goes",
    what: [
      "Domain and hosting of the site.",
      "Time to write and keep every destination and guide up to date.",
    ],
    safeTitle: "Peace of mind",
    safeBody:
      "Ko‑fi donations are processed on that platform. If you choose a bank transfer, you go to your bank or Mercado Pago app and send the amount to the CVU/alias shown. This site never stores or accesses your banking data.",
    thanksTitle: "Thank you for traveling with us!",
    bankTitle: "Support with bank transfer",
    bankNote:
      "From your bank or Mercado Pago app: choose “transfer”, paste the CVU or the alias and send the amount. The account holder and CUIT are those shown for the transfer destination.",
    bankTitular: "Account holder",
    bankCuit: "CUIT / CUIL",
    bankCvu: "CVU",
    bankAlias: "Alias",
    copyLabel: "Copy",
    copiedLabel: "Copied!",
  },
  pt: {
    footer: "Apoiar o projeto",
    compactTitle: "Esta guia foi útil?",
    compactBody:
      "Explorar o Norte exige tempo e pesquisa reais. Se o que você leu ajudou a planejar sua viagem, considere apoiar a Destinos del Norte para que continue gratuita e sem anúncios.",
    note: "Vai para o domínio e o tempo de pesquisar e atualizar cada destino.",
    koFiLabel: "Apoiar com Ko‑fi",
    mpLabel: "Apoiar por transferência (Argentina)",
    mpLine:
      "Transferência bancária via CVU (Mercado Pago), sem custo para quem doa. Ideal da Argentina.",
    mpHint: "Transferência da Argentina",
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
    mpLine2: "Se você está na Argentina, uma transferência simples e sem custo.",
    whatTitle: "Para onde vai sua contribuição",
    what: [
      "Domínio e hospedagem do site.",
      "Tempo para escrever e manter atualizados cada destino e guia.",
    ],
    safeTitle: "Tranquilidade",
    safeBody:
      "Doações via Ko‑fi são processadas nessa plataforma. Se você escolher transferência, vá ao seu banco ou app do Mercado Pago e envie o valor para o CVU/alias indicado. Este site não armazena nem acessa seus dados bancários.",
    thanksTitle: "Obrigado por viajar com a gente!",
    bankTitle: "Apoiar com transferência",
    bankNote:
      "Do seu banco ou app do Mercado Pago: escolha “transferir”, cole o CVU ou o alias e envie o valor. O titular e o CUIT são os indicados para o destino da transferência.",
    bankTitular: "Titular",
    bankCuit: "CUIT / CUIL",
    bankCvu: "CVU",
    bankAlias: "Alias",
    copyLabel: "Copiar",
    copiedLabel: "Copiado!",
  },
} as const;

export interface SupportCopy {
  footer: string;
  compactTitle: string;
  compactBody: string;
  note: string;
  koFiLabel: string;
  mpLabel: string;
  mpLine: string;
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
  mpLine2: string;
  whatTitle: string;
  what: string[];
  safeTitle: string;
  safeBody: string;
  thanksTitle: string;
  bankTitle: string;
  bankNote: string;
  bankTitular: string;
  bankCuit: string;
  bankCvu: string;
  bankAlias: string;
  copyLabel: string;
  copiedLabel: string;
}

export function supportCopy(lang: Lang): SupportCopy {
  return COPY[lang] as unknown as SupportCopy;
}

/** Orden de proveedores según idioma: es → transferencia primero; en/pt → Ko‑fi primero. */
export function supportButtons(lang: Lang): { key: SupportProvider; label: string; href?: string }[] {
  const c = supportCopy(lang);
  const koFi = { key: "ko-fi" as const, label: c.koFiLabel, href: SUPPORT_URLS.koFi };
  const bank = { key: "bank-transfer" as const, label: c.mpLabel };
  return lang === "es" ? [bank, koFi] : [koFi, bank];
}

/** Ruta de la página de apoyo según idioma (misma slug para mantener el patrón espejo es/en/pt). */
export function supportPage(lang: Lang): string {
  return lang === "es" ? "/apoyar/" : `/${lang}/apoyar/`;
}
