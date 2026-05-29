const CACHE_NAME = "v1";
const urlsToCache = [
"/",
"/index.html",
"/styles.css",
"/script.js"
];

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request).then(response => response || fetch(event.request))
);
});
Registre o service worker no seu site
Coloca isso antes de fechar o no HTML:
<script>
if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("/service-worker.js")
.then(() => console.log("Service Worker registrado"))
.catch(err => console.log("Erro:", err));
}
</script>

