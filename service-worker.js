const CACHE_NAME = "kayak-v3";

const urlsToCache = [
  "/",
  "/index.html",
  "/styles/style.css",
  
  // Página 2
  "/pagina-2/",
  "/pagina-2/index.html",
  "/pagina-2/index.css",
  "/pagina-2/index.js",
  
  "/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("✅ Cache criado com sucesso");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});