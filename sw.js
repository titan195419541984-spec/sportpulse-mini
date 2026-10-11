// Fans-Zone service worker: intentionally no ad, pop-up, redirect, or push scripts.
self.addEventListener("install", event => {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});
