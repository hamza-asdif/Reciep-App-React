import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Environment variables are automatically loaded with VITE_ prefix
  // Configure server options
  server: {
    port: 5173,
    open: true,
  },
});
