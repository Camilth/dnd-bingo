import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    base: '/Dashcam-Bingo/',
    server: {
        host: true,
        allowedHosts: [
            'unlibelously-untaintable-dilan.ngrok-free.dev'
        ]
    },
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['icons/icon-192.png', 'icons/icon-512.png'],  // extra assets die je wil includen
            manifest: {
                name: 'Dashcam Bingo',
                short_name: 'Bingo',
                start_url: '.',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#000000',
                icons: [
                    {
                        src: 'icons/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/maskable-icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    }
                ]
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