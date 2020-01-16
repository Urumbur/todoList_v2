const CACHE_NAME = 'todo_list';

const urlsToCache = [
    './index.html',
    './index.css'
  ];

  // Install a service worker
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });

  // Cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Cache hit - return response
          return response ? response : fetch(event.request);
        }
      )
    );
  });

  // Update a service worker
self.addEventListener('activate', event => {
    let cacheWhitelist = ['todo_list'];
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });