import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ react() ],
    server: {
        host: '127.0.0.1',
        port: 8888
    },
    resolve: {
        alias: [
            { find: '@', replacement: resolve(__dirname, 'src') }
        ]
    }
});
