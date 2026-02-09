const SERVICE_WORKER_VERSION = 1.03;
const CACHE_NAME = `portfolio-cache-v${SERVICE_WORKER_VERSION}`;

// Static files and routes to cache
const STATIC_FILES_TO_CACHE = [
  "/offline.html",
  "/site.webmanifest",
  "/favicon.ico",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
];

// ==================== HELPER FUNCTIONS ====================

/**
 * Caches all static files when service worker is installed
 */
const cacheStaticFiles = async () => {
  console.log("[SW] Caching static files");
  const cache = await caches.open(CACHE_NAME);
  const requests = STATIC_FILES_TO_CACHE.map(
    (url) => new Request(url, { cache: "no-cache" }),
  );
  return cache.addAll(requests);
};

/**
 * Deletes outdated caches
 */
const deleteOldCaches = async () => {
  const allCacheNames = await caches.keys();
  const oldCacheNames = allCacheNames.filter((name) => name !== CACHE_NAME);

  const deletionPromises = oldCacheNames.map((cacheName) => {
    console.log("[SW] Deleting old cache:", cacheName);
    return caches.delete(cacheName);
  });

  return Promise.all(deletionPromises);
};

/**
 * Checks if the request is from the same origin
 */
const isSameOriginRequest = (requestUrl) => {
  return requestUrl.origin === self.location.origin;
};

/**
 * Checks if the request is a navigation request (HTML page)
 */
const isNavigationRequest = (request) => {
  return request.mode === "navigate";
};

/**
 * Checks if the request is for a video file
 */
const isVideoRequest = (request) => {
  const url = new URL(request.url);
  return /\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(url.pathname);
};

/**
 * Network-first strategy: Try network, fallback to cache, then offline page
 */
const handleNavigationRequest = async (request) => {
  try {
    // Try to fetch from network
    const networkResponse = await fetch(request);

    if (networkResponse && networkResponse.ok) {
      // Cache the successful response
      // Don't cache the home page to ensure it's always fresh
      const url = new URL(request.url);
      if (url.pathname !== "/") {
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    }
  } catch (networkError) {
    console.log("[SW] Network request failed, trying cache");
  }

  // Network failed, try cache
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  // No cache, return offline page
  return caches.match("/offline.html");
};

/**
 * Cache-first strategy: Try cache, fallback to network
 */
const handleAssetRequest = async (request) => {
  // Don't cache video files
  if (isVideoRequest(request)) {
    return fetch(request);
  }

  // Check cache first
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    // Not in cache, fetch from network
    const networkResponse = await fetch(request);

    // Cache successful responses
    if (networkResponse && networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error("[SW] Failed to fetch asset:", request.url, error);
    throw error;
  }
};

/**
 * Main fetch handler with error handling
 */
const handleFetchRequest = async (request) => {
  try {
    if (isNavigationRequest(request)) {
      return await handleNavigationRequest(request);
    } else {
      return await handleAssetRequest(request);
    }
  } catch (error) {
    console.error("[SW] Fetch failed:", error);

    // Try to return cached version as last resort
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Return offline page for navigation requests
    if (isNavigationRequest(request)) {
      return caches.match("/offline.html");
    }

    throw error;
  }
};

/**
 * Handles skip waiting message from client
 */
const handleClientMessage = (messageData) => {
  if (messageData && messageData.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
};

// ==================== EVENT HANDLERS ====================

/**
 * Install event - cache static files
 */
const onInstall = (event) => {
  console.log(
    "[SW] Installing service worker version:",
    SERVICE_WORKER_VERSION,
  );

  event.waitUntil(
    cacheStaticFiles()
      .then(() => self.skipWaiting())
      .catch((error) => console.error("[SW] Install failed:", error)),
  );
};

/**
 * Activate event - clean up old caches
 */
const onActivate = (event) => {
  console.log(
    "[SW] Activating service worker version:",
    SERVICE_WORKER_VERSION,
  );

  event.waitUntil(deleteOldCaches().then(() => self.clients.claim()));
};

/**
 * Fetch event - serve from cache or network
 */
const onFetch = (event) => {
  const { request } = event;
  const requestUrl = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Skip external requests
  if (!isSameOriginRequest(requestUrl)) {
    return;
  }

  event.respondWith(handleFetchRequest(request));
};

/**
 * Message event - handle messages from client
 */
const onMessage = (event) => {
  handleClientMessage(event.data);
};

// ==================== REGISTER EVENT LISTENERS ====================

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);
self.addEventListener("fetch", onFetch);
self.addEventListener("message", onMessage);
