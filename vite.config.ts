import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default () => {
  dotenv.config({ path: `./.env` });

  const AUTH_SERVICE = process.env.VITE_AUTH_SERVICE_URL;
  // const COMMENT_SERVICE = process.env.VITE_COMMENT_SERVICE_URL
  // const VOTE_SERVICE = process.env.VITE_VOTE_SERVICE_URL

  if (!AUTH_SERVICE) {
    throw new Error('vite.config.ts error: env vars not set');
  }

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5174,
      proxy: {
        '/auth-service': {
          target: `${AUTH_SERVICE}/api/v1`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/auth-service/, ''),
        },
      },
    },
  });
};
