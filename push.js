var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BP95QV58WEPOnXsHZku9KtAdsRHQ5IsHq2pH5END7ZpNmjyAKUTDIZaAecLzAW6MitLor4VzjV50yMyibrFG3K8",
    "privateKey": "DRSSpytB0Av9greYHRT0m03Ej3gPSUSqhsQEQtolaeg"
};

var pushSubscription = {
    "endpoint": "https://sg2p.notify.windows.com/w/?token=BQYAAADef31CUYtvvCVBEPQ6XOkeIOCeLAEuAfV54NWqeKFQ0UeuiGc0guAfY6ASmTLjTOx7g7K%2fgYMgwAsHQaviTjz%2blsiHkjngdAhvO9gixw8it4odS4luyoUHsnONlaUGgdx4OAlHNqtsTplxrMSYptt5Dgim9c7zYNdSZcli37cYz9Qi1cCiZ0XwYwjjefC0xnSkBrEynzNIKnvsymKA2WroxUyOQAR%2feVvMO8fkNpsDP9opdPDBQgHewqxqhnAJoLOqZSgqJBPnAJLh4NR03GMcbC%2fqmlpAJhr2NTgBrcQjgwtJx6oicWSi6zC3JoDea39jQP4PIoZkxqywTkxOA44c",
    "keys": {
        "p256dh": "BNIdDm6GU7QyDhjLE8XXL0Qkvi0h3tYWqeS9NHtLsh0lYzKDrJG2BqFSQ2oe6PTyCGiTYGgIJNr7s9EjtVascVI=",
        "auth": "xX3pUPLJ/l/PnLuh5h62ig=="
    }
};

var options = {
    gcmAPIKey: '1098763227035',
    TTL: 60
};

var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

webPush.setVapidDetails(
    'mailto:farasjibran@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);