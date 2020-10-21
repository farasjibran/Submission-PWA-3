var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BG4qzuzz1jSW4M-iw5gh80l7s82DQmr4wwtsE2nUaZiRtCeDPVHmIK1GEZC5Lyo_x_efPoAN7Ox0YG8JK-586g8",
    "privateKey": "tiF4ETHZwrGDxXMRU1Ty6UMBpR7Wa9-O9IKmu4RQ59c"
};

var pushSubscription = {
    "endpoint": "https://sg2p.notify.windows.com/w/?token=BQYAAABebIQwt9E5W1774l5H08yR6FN1RDbWEf5MWdWI7eAU%2bKzFAf0DNRIUD0V%2b7golqCgeLagKxvh9E8lA7Ciq41HuhshpReK1x0oBybncfKut3vg0MpjjjVuQY6WkLa6A%2bmLr1JAZibJBPR5gaen1IHNQtyfNNrZelMV9adXza19QTocyGx4nKDvSdrc2KVfhhcHBAx3yIQzNaAq%2fv0P0cyQGnC9nDaYHgXKdW%2fc5TBxbSNdmPbUJyTIHRAz%2fRU2ie7IPhlGituV3liSyPB95C%2bwJh4VwRDYhGePgCJvNsUrQ9GhrowS%2bb1TrFHY5J51SjefIfbmHOr4fQ%2bGZ0L6R5tyR",
    "keys": {
        "p256dh": "BMKcXRBponfsymTucjuXBbAg67bzzMSYsFRGdlHLuv2ReP6szPSRXAeXoW8FhJJ5cFPcGdH6B1wrNT+Q6ZqNR7s=",
        "auth": "V/4teNJl8wmRHKEnTVJZZg=="
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