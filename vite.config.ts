import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // Define a porta para ambiente de desenvolvimento (se necessário)
    host: true, // Permite acesso via IP ou domínio
  },
  preview: {
    port: 4173, // Porta padrão usada pelo `vite preview`
    host: true, // Permite acesso externo no ambiente de produção
  },
});
