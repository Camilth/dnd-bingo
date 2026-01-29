import { defineConfig } from 'vite';

export default defineConfig({
    base: '/Dashcam-Bingo/',
    server: {
        host: true,
        allowedHosts: [
            'unlibelously-untaintable-dilan.ngrok-free.dev'
        ]
    }
});