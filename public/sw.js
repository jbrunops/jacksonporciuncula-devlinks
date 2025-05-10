// Service Worker para Jackson Porciúncula Portfolio
const CACHE_NAME = 'jackson-portfolio-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/opengraph.png',
  '/icons/icon.svg',
  '/favicon.ico'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Estratégia de cache: Stale-While-Revalidate
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - retorna resposta imediatamente
        if (response) {
          // Revalida no background
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            // Não cacheia respostas de API ou conteúdo dinâmico
            if (event.request.url.includes('/api/') || event.request.method !== 'GET') {
              return networkResponse;
            }
            
            // Atualiza o cache com a nova resposta
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
            
            return networkResponse;
          });
          
          // Retorna a resposta do cache enquanto atualiza no background
          return response;
        }

        // Não encontrou no cache, busca na rede
        return fetch(event.request)
          .then((response) => {
            // Não cacheia respostas de API ou conteúdo dinâmico
            if (event.request.url.includes('/api/') || event.request.method !== 'GET') {
              return response;
            }
            
            // Clona a resposta
            const responseToCache = response.clone();
            
            // Adiciona ao cache para futuras requisições
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Se falhar tentar retornar uma página de fallback para navegação
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            
            // Ou retornar erro
            return new Response('Conteúdo não disponível offline.', {
              status: 503,
              statusText: 'Serviço indisponível',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Limpeza de caches antigos
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 