import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { visit } from "unist-util-visit";

const SITE_URL = "https://destinosdelnorte.ar";
// Subpath de despliegue. En la raíz del dominio propio es "" (Astro base "/").
const BASE_SUBPATH = "";

function rehypeBaseLinks() {
  if (BASE_SUBPATH === "") {
    return () => {};
  }
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "a") {
        const href = node.properties?.href;
        if (
          typeof href === "string" &&
          href.startsWith("/") &&
          !href.startsWith("//") &&
          !href.startsWith(BASE_SUBPATH)
        ) {
          node.properties.href = BASE_SUBPATH + href;
        }
      }
    });
  };
}

export default defineConfig({
  site: SITE_URL,
  base: BASE_SUBPATH || "/",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/busqueda/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [rehypeBaseLinks],
  },
  build: {
    format: "directory",
  },
});
