/* Cache-first service worker — makes the app fully usable offline.
   IMPORTANT: bump the CACHE version string on every content/code release. Because
   this is cache-first, a stale service worker keeps serving the OLD index.html
   (old question bank, old bug fixes) to returning users until the browser's own
   byte-diff update cycle happens to run — which can take a while for a PWA that's
   opened infrequently. Bumping the name forces immediate cache invalidation. */
const CACHE = "saa-c03-v9";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});
