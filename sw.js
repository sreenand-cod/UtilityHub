// sw.js
const CACHE_VERSION = 'v1.1.1';
const CACHE_NAME = `utilityhub-cache-${CACHE_VERSION}`;

// Core assets to cache immediately upon install
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json', // Included for PWA readiness
];

// Install Event: Cache essential files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            // Using Promise.allSettled so the SW still installs even if manifest/icons aren't created yet
            return Promise.allSettled(
                ASSETS_TO_CACHE.map(url => 
                    cache.add(url).catch(err => console.warn(`[SW] Non-critical cache failed for ${url}`))
                )
            );
        })
    );
    // Force the waiting service worker to become the active service worker
    self.skipWaiting();
});

// Activate Event: Clean up old cache versions
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName.startsWith('utilityhub-cache-')) {
                        console.log(`[SW] Deleting old cache: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Ensure the service worker takes control of clients immediately
    self.clients.claim();
});

// Fetch Event: Stale-While-Revalidate strategy for optimal offline and update performance
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Only intercept same-origin requests and Google Fonts
    if (url.origin !== self.location.origin && !url.hostname.includes('fonts.googleapis.com') && !url.hostname.includes('fonts.gstatic.com')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Initiate network request to fetch the latest version in the background
            const networkFetch = fetch(event.request).then((networkResponse) => {
                // Verify valid response before caching
                if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => {
                // Silent catch: if offline, the network fetch will fail, 
                // but we safely fall back to the cachedResponse below
            });

            // Return cached response instantly if available, otherwise wait for the network
            return cachedResponse || networkFetch;
        })
    );
});
