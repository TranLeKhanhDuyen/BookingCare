import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()]
});

// vite.config.js or vite.config.ts
// import ViteReactPlugin from '@vitejs/plugin-react';

// export default {
//   plugins: [ViteReactPlugin()]
// };
