import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import history from "connect-history-api-fallback";
import cssnano from "cssnano";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/fonts",
          dest: "fonts",
        },
      ],
    }),
  ],
  publicDir: "public",
  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: "default",
        }),
      ],
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    setup: (app) => {
      app.use(history());
    },
  },
  base: "/",
});
