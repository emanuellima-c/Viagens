const CACHE_NAME = "kayak-v6";
const OFFLINE_URL = "offline.html";

const CORE_ASSETS = [
  "./",
  "index.html",
  "offline.html",
  "styles/style.css",
  "manifest.json",
  "icons/icon-192.jpg",
  "icons/icon-512.jpg",
  "assets/bgh.jpg",   // Hero background - critical for first paint in PWA
  // Página 2 não é mais precarregada (muda com frequência durante desenvolvimento)
];

// Instala e precacheia os recursos principais
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(CORE_ASSETS);
      // Coloca o novo SW em espera para ativar imediatamente
      await self.skipWaiting();
    })()
  );
});

// Ativação: limpa caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
      // Assume controle de todas as páginas abertas imediatamente
      await self.clients.claim();
    })()
  );
});

// Estratégia: Cache First para assets estáticos, Network First para navegação
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignora requisições que não são GET
  if (request.method !== "GET") return;

  // Para navegação (HTML), tenta rede primeiro, cai no cache, depois offline
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(request);
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, networkResponse.clone());
          return networkResponse;
        } catch (err) {
          const cached = await caches.match(request);
          if (cached) return cached;

          // Fallback offline
          const offlinePage = await caches.match(OFFLINE_URL);
          if (offlinePage) return offlinePage;

          const indexFallback = await caches.match("index.html");
          return indexFallback || new Response("Você está offline. Tente novamente mais tarde.", {
            headers: { "Content-Type": "text/plain; charset=utf-8" }
          });
        }
      })()
    );
    return;
  }

  // Para outros recursos (CSS, JS, imagens): Cache First
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          // Só cacheia respostas válidas
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // Fallback para imagens
          if (request.destination === "image") {
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="#f56c11"><rect width="200" height="200" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24">KAYAK</text></svg>',
              { headers: { "Content-Type": "image/svg+xml" } }
            );
          }
        });
    })
  );
});