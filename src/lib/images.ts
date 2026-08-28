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

export const ASSET = {
  logo: "logo_destinos_del_norte.png",
  hero: "hero_img.png",
  cardSalta: "salta_que_hacer_card.png",
  cardJujuy: "jujuy_que_hacer_card.png",
  cardTucuman: "tucuman_que_hacer_card.png",
} as const;
