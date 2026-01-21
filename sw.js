const CACHE_NAME = 'carnet-vol-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Installation du Service Worker et mise en cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Distribution des fichiers depuis le cache si hors-ligne
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
