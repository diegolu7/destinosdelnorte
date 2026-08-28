import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://diegolu7.github.io",
  base: "/destinosdelnorte",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/busqueda/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "directory",
  },
});
