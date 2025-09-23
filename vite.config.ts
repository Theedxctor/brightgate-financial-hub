import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      // Only include environment variables that are safe to expose
      __APP_ENV__: JSON.stringify(env.NODE_ENV),
    },
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    // Only include environment variables that are explicitly used in your code
    envPrefix: 'VITE_',
    // Don't inline environment variables in the production build
    build: {
      target: 'esnext',
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
  };
});
