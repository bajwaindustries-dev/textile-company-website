import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
    // Poll instead of native fs.watch: on Windows, a file locked mid-copy
    // (e.g. a large asset dropped into public/) makes fs.watch throw EBUSY
    // and kills the dev server. Polling just retries on the next tick.
    watch: {
      usePolling: true,
      interval: 300,
      binaryInterval: 1000,
      ignored: ["**/*.zip"],
    },
  },
  build: {
    outDir: "dist",
  },
});