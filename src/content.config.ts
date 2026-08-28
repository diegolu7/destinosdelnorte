import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const provincias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/provincias" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    region: z.string(),
    imagen: z.string(),
    descripcion: z.string(),
    keywords: z.array(z.string()),
    intro: z.string(),
  }),
});

const destinos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/destinos" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    provincia: z.string(),
    imagen: z.string(),
    descripcion: z.string(),
    keywords: z.array(z.string()),
    intro: z.string(),
  }),
});

const experiencias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experiencias" }),
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    icono: z.enum(["aventura", "cultura", "gastronomia", "naturaleza"]),
  }),
});

export const collections = { provincias, destinos, experiencias };
