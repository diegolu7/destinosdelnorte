import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { visit } from "unist-util-visit";

const BASE_URL = "/destinosdelnorte";

function rehypeBaseLinks() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "a") {
        const href = node.properties?.href;
        if (
          typeof href === "string" &&
          href.startsWith("/") &&
          !href.startsWith("//") &&
          !href.startsWith(BASE_URL)
        ) {
          node.properties.href = BASE_URL + href;
        }
      }
    });
  };
}

export default defineConfig({
  site: "https://diegolu7.github.io",
  base: BASE_URL,
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
