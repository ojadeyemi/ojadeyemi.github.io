// ==================== HELPER FUNCTIONS ====================

/**
 * Handles when a new service worker update is found
 */
const handleServiceWorkerUpdate = (registration) => {
  const newServiceWorker = registration.installing;
  console.log("[SW] Update found, new worker installing");

  newServiceWorker.addEventListener("statechange", () => {
    const isNewWorkerInstalled = newServiceWorker.state === "installed";
    const hasExistingController = navigator.serviceWorker.controller;

    if (isNewWorkerInstalled && hasExistingController) {
      console.log("[SW] New version available, updating...");
      // Tell the new service worker to take over immediately
      newServiceWorker.postMessage({ type: "SKIP_WAITING" });
    }
  });
};

/**
 * Handles successful service worker registration
 */
const handleRegistrationSuccess = (registration) => {
  console.log("[SW] Registration successful:", registration.scope);

  // Listen for service worker updates
  registration.addEventListener("updatefound", () => {
    handleServiceWorkerUpdate(registration);
  });
};

/**
 * Handles service worker registration failure
 */
const handleRegistrationError = (error) => {
  console.error("[SW] Registration failed:", error);
};

/**
 * Reloads the page when a new service worker takes control
 */
const handleControllerChange = () => {
  // Prevent multiple reloads
  if (!window.serviceWorkerRefreshing) {
    window.serviceWorkerRefreshing = true;
    console.log("[SW] New service worker activated, reloading page...");
    window.location.reload();
  }
};

/**
 * Handles when the app comes back online
 */
const handleOnlineStatus = () => {
  console.log("[SW] Back online");
};

/**
 * Handles when the app goes offline
 */
const handleOfflineStatus = () => {
  console.log("[SW] Gone offline");
};

/**
 * Registers the service worker
 */
const registerServiceWorker = () => {
  navigator.serviceWorker
    .register("/sw.js")
    .then(handleRegistrationSuccess)
    .catch(handleRegistrationError);
};

// ==================== INITIALIZATION ====================

/**
 * Initialize service worker when page loads
 */
const initializeServiceWorker = () => {
  const isServiceWorkerSupported = "serviceWorker" in navigator;

  if (!isServiceWorkerSupported) {
    console.log("[SW] Service workers are not supported in this browser");
    return;
  }

  // Register service worker
  registerServiceWorker();

  // Listen for service worker controller changes (updates)
  navigator.serviceWorker.addEventListener(
    "controllerchange",
    handleControllerChange,
  );
};

// ==================== EVENT LISTENERS ====================

// Initialize when page loads
window.addEventListener("load", initializeServiceWorker);

// Monitor online/offline status
window.addEventListener("online", handleOnlineStatus);
window.addEventListener("offline", handleOfflineStatus);
