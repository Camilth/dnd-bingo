import './app.js';
import { registerSW } from 'virtual:pwa-register';

registerSW({
    immediate: true
});

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
});