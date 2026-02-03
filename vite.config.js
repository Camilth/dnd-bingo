import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'DnD App',
                short_name: 'DnD App',
                theme_color: '#ffffff',
            }
        })
    ]
});