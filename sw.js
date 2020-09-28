"use strict";
// && 'PushManager' in window
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/onesignaltest/service-worker.js')

            .then(function (success) {
                console.log('[Service Worker Sucessed]', success);
            })
            .catch(function (error) {
                console.log('[Service Worker Failed]', error);
            });
    });
}