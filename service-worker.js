const CACHE_NAME = 'concal-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-512.png',
  './apple-touch-icon.png',
  // Fonts - matching the paths in your CSS
  './fonts/Inter-Light.woff2',
  './fonts/Inter-Regular.woff2',
  './fonts/Inter-SemiBold.woff2',
  './fonts/Chivo-Light.woff2',
  './fonts/Chivo-Regular.woff2',
  './fonts/Chivo-Medium.woff2',
  './fonts/Fira-Regular.woff2',
  './fonts/Fira-Medium.woff2'
];

// 1. Install Event: Cache static assets immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('ConCal: Caching App Shell');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('ConCal: Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Fetch Event: Network-First for external CDN, Cache-First for local files
self.addEventListener('fetch', (event) => {
  // Check if the request is for an external resource (like the CDN for haptics)
  if (event.request.url.includes('cdn.jsdelivr.net')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Return cached CDN file if available, otherwise fetch from network
        return cachedResponse || fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            // Cache the CDN response for next time
            cache.put(event.request, response.clone());
            return response;
          });
        });
      }).catch(() => {
        // If offline and CDN not cached, just return nothing (app handles fallback)
        return new Response('', { status: 408, headers: { 'Content-Type': 'text/plain' } });
      })
    );
  } else {
    // For local files (index.html, fonts, etc.), use Cache-First strategy
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});