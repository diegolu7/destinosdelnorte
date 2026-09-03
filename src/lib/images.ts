type ImageMap = Record<string, ImageMetadata>;

const modules = import.meta.glob<ImageMetadata>("../assets/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
});

export const images: ImageMap = modules;

export function getImage(name: string): ImageMetadata {
  const image = images[`../assets/${name}`];
  if (!image) {
    throw new Error(`Asset no encontrado: ${name}`);
  }
  return image;
}

export function hasImage(name: string): boolean {
  return Boolean(images[`../assets/${name}`]);
}

export const PLACEHOLDERS = {
  card: "que_hacer_card_placeholder.webp",
  section: "seccion_atractivo_placeholder.webp",
} as const;

export function resolveImage(name: string): ImageMetadata {
  if (hasImage(name)) return getImage(name);
  return getImage(PLACEHOLDERS.section);
}

export const ASSET = {
  logo: "logo_destinos_del_norte.webp",
  hero: "hero_img.webp",
  cardSalta: "salta_que_hacer_card.webp",
  cardJujuy: "jujuy_que_hacer_card.webp",
  cardTucuman: "tucuman_que_hacer_card.webp",
} as const;
