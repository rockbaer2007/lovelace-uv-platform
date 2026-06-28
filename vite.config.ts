import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "LovelaceUVPlatform",
      fileName: "lovelace-uv-platform",
      formats: ["es"]
    },
    rollupOptions: {
      external: []
    }
  }
});