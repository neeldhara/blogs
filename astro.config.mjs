// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";
// @ts-ignore - TailwindCSS v4 Vite plugin has type compatibility issues with Astro
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://neeldhara.blog",
  integrations: [mdx(), sitemap(), react()],
  output: "static",

  vite: {
    // @ts-ignore - Suppress TypeScript error for TailwindCSS v4 plugin compatibility
    plugins: [tailwindcss()],
  },
});
