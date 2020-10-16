var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BIbZitzEiNqo8y1hKIulKRA-EoMz8YvVfkZq5IaCk-rSBrOMg6YZW4TLHyh4_q7Opw7bnA2WQ_UKKXiZEq7yYrE",
    "privateKey": "nJx7XybhaiQCKH95FiQChifiP5CMTCGOcTwZ5cWwQzc"
};

var pushSubscription = {
    "endpoint": "https://sg2p.notify.windows.com/w/?token=BQYAAAAEaJq%2frGTYQ8hikd3nPDWB3qe%2fbjKPEyBSZBv2PqUe1zcDbXtxgVH6IttP83O4aaEpwqklPNSoRP%2bahybfajo3vhi50tEW39aL9UVfUl49ntHeAfCnPNXeNDFO1EOzF8fKGgyfuyoq2xZEMTC%2fOCb%2fq%2bUa5sem4bcAbMDX%2bXmTxNY3BR1Lu%2fyj9bEUbIzVEk1qwdZ86W3pn4rUqXWU8axJFDIpIeo7S9wK5IRJbigmD9IiA2U1jgQr2j2%2fgMBJ43GuktAkrfvyWl1%2bFbn057xSQK9ndV5sfq2RNeA8rTyzN5EfPX0%2bK2V1VYGBdjX0Kz8%3d",
    "keys": {
        "p256dh": "BEZc1UbSnVRMAqgOWTOaDrp5ctEM/sVZqRDJ5388gTHkxkSoQqzHLgjrSQjnlqYVdXiOmfbwH/CN0qpc1xxjSJo=",
        "auth": "nw3Td4YG6L5o4Mt6PjUDug=="
    }
};

var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '1098763227035',
    TTL: 60
};

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