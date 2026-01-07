const CACHE_NAME = 'concal-v1';
const ASSETS = [
  './',
  './index.html',
  './ConCal_logo.jpg',
  // Include your fonts here to ensure they work offline
  './fonts/Inter-Light.woff2',
  './fonts/Inter-Regular.woff2',
  './fonts/Inter-SemiBold.woff2',
  './fonts/Chivo-Light.woff2',
  './fonts/Chivo-Regular.woff2',
  './fonts/Chivo-Medium.woff2',
  './fonts/Fira-Regular.woff2',
  './fonts/Fira-Medium.woff2',
  './fonts/Gloock-Regular.woff2'
];

// Install Event: Cache assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
});

// Fetch Event: Serve from cache, fall back to network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
