import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // To mówi stronie: "nie szukaj plików w głównym folderze, tylko w /skryptyUMP.github.io/"
  base: '/skryptyUMP.github.io/', 
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
