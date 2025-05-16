import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // CRA's default build output
  },
  define: {
    'import.meta.env': {}, // Prevents ESLint issues
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
