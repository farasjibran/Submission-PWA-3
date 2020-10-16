const CACHE_NAME = "footballapp-v1";
var urlsToCache = [
    "/",
    "manifest.json",
    "service-worker.js",
    "icon.png",
    "/nav.html",
    "/index.html",
    "/css/materialize.css",
    "/js/materialize.js",
    "/js/nav.js",
    "/js/api.js",
    "/js/items.js",
    "/js/idb.js",
    "/js/db.js",
    "/pages/standings.html",
    "/pages/faforit.html",
    "https://cdn.jsdelivr.net/gh/mailtoharshit/San-Francisco-Font-/sanfrancisco.css",
    "/css/fontawesome-free/css/all.min.css",
    "/css/fontawesome-free/webfonts/fa-solid-900.ttf",
    "/css/fontawesome-free/webfonts/fa-brands-400.ttf",
    "/css/fontawesome-free/webfonts/fa-regular-400.ttf",
    "/css/fontawesome-free/webfonts/fa-solid-900.woff2",
    "/css/fontawesome-free/webfonts/fa-brands-400.woff",
    "/css/fontawesome-free/webfonts/fa-regular-400.woff",
    "/css/fontawesome-free/webfonts/fa-brands-400.woff2",
    "/css/fontawesome-free/webfonts/fa-regular-400.woff2"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function (event) {
    const baseurl = "https://api.football-data.org/";

    if (event.request.url.indexOf(baseurl) > -1) {
        event.respondWith(
            caches.open(CACHE_NAME).then(function (cache) {
                return fetch(event.request).then(function (response) {
                    cache.put(event.request.url, response.clone());
                    return response;
                });
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request, { ignoreSearch: true }).then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});


self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log("ServiceWorker: cache " + cacheName + " dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('push', function (event) {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: body,
        icon: 'icon.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});