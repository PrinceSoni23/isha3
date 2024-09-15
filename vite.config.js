import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  export default {
  build: {
    chunkSizeWarningLimit: 2000, // Set your preferred limit here in KB (e.g., 2000KB)
  },
};
})
