import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  root: "./src",
  base: "/coca/", // Здесь назваение репозитория
  server: {
    open: true,
  },
  publicDir: "./src/assets",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./src/index.html",
        pricing: "./src/pricing.html",
        contact: "./src/contact.html",
        about: "./src/about.html",
        updates: "./src/activity-updates.html",
        singlePost: "./src/single-post.html",
      },
    },
  },
  plugins: [
    injectHTML(),
    ViteMinifyPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
