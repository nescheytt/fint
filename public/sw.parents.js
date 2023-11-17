this.addEventListener('install', async () => {
  this.skipWaiting();
});

this.addEventListener('fetch', (eve) => {
  eve.respondWith(fetch(eve.request));
});
