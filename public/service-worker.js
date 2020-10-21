importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log(`Workbox berhasil dimuat`);
    workbox.precaching.precacheAndRoute([{
        url: '/',
        revision: '2'
    },
    {
        url: '/index.html',
        revision: '2'
    },
    {
        url: '/manifest.json',
        revision: '2'
    },
    {
        url: '/nav.html',
        revision: '2'
    },
    {
        url: '/pages/faforit.html',
        revision: '2'
    },
    {
        url: '/pages/matches.html',
        revision: '2'
    },
    {
        url: '/pages/standings.html',
        revision: '2'
    },
    {
        url: '/css/materialize.min.css',
        revision: '2'
    },
    {
        url: '/js/materialize.min.js',
        revision: '2'
    },
    {
        url: '/js/api.js',
        revision: '2'
    },
    {
        url: '/js/db.js',
        revision: '2'
    },
    {
        url: '/js/idb.js',
        revision: '2'
    },
    {
        url: '/js/items.js',
        revision: '2'
    },
    {
        url: '/js/nav.js',
        revision: '2'
    }
    ]);

    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg)$/,
        workbox.strategies.cacheFirst({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
                }),
            ],
        })
    );
    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/'),
        workbox.strategies.staleWhileRevalidate()
    );

    workbox.routing.registerRoute(
        new RegExp('.*\.js'),
        workbox.strategies.cacheFirst()
    );

    workbox.routing.registerRoute(
        new RegExp('https://cdn.jsdelivr.net/gh/mailtoharshit/San-Francisco-Font-/sanfrancisco.css'),
        workbox.strategies.staleWhileRevalidate()
    );

    workbox.routing.registerRoute(
        new RegExp('https://fonts.googleapis.com/icon?family=Material+Icons'),
        workbox.strategies.staleWhileRevalidate()
    );

    workbox.routing.registerRoute(
        new RegExp('/pages/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'pages'
        })
    );
} else {
    console.log(`Workbox gagal dimuat`);
}

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