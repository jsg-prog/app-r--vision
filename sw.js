/* ==========================================================================
   SERVICE WORKER • CYBER-SISR & CYBEROPS HUB
   Enables offline mode, instant mobile caching, and PWA installation
   ========================================================================== */

const CACHE_NAME = "cyber-sisr-cache-v2";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./css/components.css",
  "./js/data/sisr-database.js",
  "./js/data/cyberops-database.js",
  "./js/data/cejm-database.js",
  "./js/data/toeic-database.js",
  "./js/storage.js",
  "./js/modules/quiz-engine.js",
  "./js/modules/flashcards.js",
  "./js/modules/sisr-tools.js",
  "./js/modules/sisr-training.js",
  "./js/modules/jarvis-core.js?v=8",
  "./js/modules/cyberops-hub.js",
  "./js/modules/cejm-hub.js",
  "./js/modules/toeic-hub.js",
  "./js/app.js"
];

// Install Event: cache all core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("⚡ [SW] Mise en cache des ressources pour mode hors-ligne...");
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: purge outdated caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("🧹 [SW] Suppression de l'ancien cache :", key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Stale-While-Revalidate strategy for ultra-fast response
self.addEventListener("fetch", (event) => {
  // Only handle GET requests for local assets
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback
        return cachedResponse;
      });

      return cachedResponse || fetchPromise;
    })
  );
});
