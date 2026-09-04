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
    lang: z.enum(["es", "en", "pt"]).default("es"),
  }),
});

const provinciasEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/provincias-en" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    region: z.string(),
    imagen: z.string(),
    descripcion: z.string(),
    keywords: z.array(z.string()),
    intro: z.string(),
    lang: z.enum(["es", "en", "pt"]).default("en"),
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
    lugaresImperdibles: z
      .array(z.object({ nombre: z.string(), descripcion: z.string().optional() }))
      .optional(),
    experiencias: z.array(z.string()).optional(),
    comoLlegar: z.string().optional(),
    mejorEpoca: z.string().optional(),
    diasRecomendados: z.string().optional(),
    dondeComer: z.string().optional(),
    dondeAlojarse: z.string().optional(),
    consejos: z.array(z.string()).optional(),
    destinosCercanos: z.array(z.string()).optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
  }),
});

const guias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guias" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    provincia: z.string(),
    destino: z.string(),
    tipo: z.enum([
      "como-llegar",
      "mejor-epoca",
      "consejos",
      "que-hacer",
      "itinerario",
      "experiencia",
    ]),
    imagen: z.string().optional(),
    fechaActualizacion: z.coerce.date().optional(),
  }),
});

const experiencias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experiencias" }),
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    icono: z.enum(["aventura", "cultura", "gastronomia", "naturaleza", "bodegas", "senderismo"]),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faqs" }),
  schema: z.object({
    pregunta: z.string(),
    categoria: z.string(),
  }),
});

const faqsEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faqs-en" }),
  schema: z.object({
    pregunta: z.string(),
    categoria: z.string(),
  }),
});

const rutas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rutas" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    dias: z.number(),
    imagen: z.string().optional(),
  }),
});

const rutasEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rutas-en" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    dias: z.number(),
    imagen: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.coerce.date(),
    categoria: z.string().optional(),
    imagen: z.string().optional(),
  }),
});

const blogEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog-en" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.coerce.date(),
    categoria: z.string().optional(),
    imagen: z.string().optional(),
  }),
});

const destinosEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/destinos-en" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    provincia: z.string(),
    imagen: z.string(),
    descripcion: z.string(),
    keywords: z.array(z.string()),
    intro: z.string(),
    lugaresImperdibles: z
      .array(z.object({ nombre: z.string(), descripcion: z.string().optional() }))
      .optional(),
    experiencias: z.array(z.string()).optional(),
    comoLlegar: z.string().optional(),
    mejorEpoca: z.string().optional(),
    diasRecomendados: z.string().optional(),
    dondeComer: z.string().optional(),
    dondeAlojarse: z.string().optional(),
    consejos: z.array(z.string()).optional(),
    destinosCercanos: z.array(z.string()).optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
  }),
});

const guiasEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guias-en" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    provincia: z.string(),
    destino: z.string(),
    tipo: z.enum([
      "como-llegar",
      "mejor-epoca",
      "consejos",
      "que-hacer",
      "itinerario",
      "experiencia",
    ]),
    imagen: z.string().optional(),
    fechaActualizacion: z.coerce.date().optional(),
  }),
});

const provinciasPt = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/provincias-pt" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    region: z.string(),
    imagen: z.string(),
    descripcion: z.string(),
    keywords: z.array(z.string()),
    intro: z.string(),
    lang: z.enum(["es", "en", "pt"]).default("pt"),
  }),
});

const destinosPt = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/destinos-pt" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    provincia: z.string(),
    imagen: z.string(),
    descripcion: z.string(),
    keywords: z.array(z.string()),
    intro: z.string(),
    lugaresImperdibles: z
      .array(z.object({ nombre: z.string(), descripcion: z.string().optional() }))
      .optional(),
    experiencias: z.array(z.string()).optional(),
    comoLlegar: z.string().optional(),
    mejorEpoca: z.string().optional(),
    diasRecomendados: z.string().optional(),
    dondeComer: z.string().optional(),
    dondeAlojarse: z.string().optional(),
    consejos: z.array(z.string()).optional(),
    destinosCercanos: z.array(z.string()).optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
  }),
});

const guiasPt = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guias-pt" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    provincia: z.string(),
    destino: z.string(),
    tipo: z.enum([
      "como-llegar",
      "mejor-epoca",
      "consejos",
      "que-hacer",
      "itinerario",
      "experiencia",
    ]),
    imagen: z.string().optional(),
    fechaActualizacion: z.coerce.date().optional(),
  }),
});

const rutasPt = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rutas-pt" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    dias: z.number(),
    imagen: z.string().optional(),
  }),
});

const blogPt = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog-pt" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.coerce.date(),
    categoria: z.string().optional(),
    imagen: z.string().optional(),
  }),
});

const faqsPt = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faqs-pt" }),
  schema: z.object({
    pregunta: z.string(),
    categoria: z.string(),
  }),
});

export const collections = {
  provincias,
  provinciasEn,
  provinciasPt,
  destinos,
  destinosEn,
  destinosPt,
  guias,
  guiasEn,
  guiasPt,
  experiencias,
  faqs,
  faqsEn,
  faqsPt,
  rutas,
  rutasEn,
  rutasPt,
  blog,
  blogEn,
  blogPt,
};
