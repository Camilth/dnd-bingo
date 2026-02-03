import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    base: '/dnd-bingo/',  // ← Fixed for GitHub Pages
    server: {
        host: true,
        allowedHosts: [
            'unlibelously-untaintable-dilan.ngrok-free.dev'
        ]
    },
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['icons/icon-192.png', 'icons/icon-512.png'],
            manifest: {
                name: 'Dashcam Bingo',
                short_name: 'Bingo',
                start_url: '/dnd-bingo/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#3498db',
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: /.*\.(js|css|png|svg|webmanifest)/,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'static-resources'
                        }
                    }
                ]
            }
        })
    ]
});