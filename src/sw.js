const BASE = '/Dashcam-Bingo/';
const CACHE = 'dashcam-bingo-v2';
const ASSETS = [
    BASE,
    BASE + 'index.html',
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE)
                    .map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(res => res || fetch(e.request))
            .catch(() => caches.match(BASE + 'index.html'))
    );
});