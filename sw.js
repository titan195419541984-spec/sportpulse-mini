// Fans-Zone service worker. No ad, push-notification, or redirect scripts are loaded here.
self.addEventListener("install", event => {
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});
