import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir:'./public',
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      "@assets": path.join(__dirname, "assets"),
      "@templates": path.join(__dirname, "templates"),
      "@services": path.join(__dirname, "services"),
    },
  },
  plugins: [react()],
});
