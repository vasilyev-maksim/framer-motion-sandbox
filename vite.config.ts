import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    server: {
      strictPort: true,
      port: 3000,
      host: 'l.expertoption.dev',
    },
    plugins: [react()],
  };
});
