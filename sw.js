const CACHE_NAME = 'rema-checklist-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icone-192.png',
  './icone-512.png'
];

// Instala o robozinho e faz o download da tela pro celular
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// Quando o técnico estiver sem internet, o robozinho entrega a tela salva no cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});