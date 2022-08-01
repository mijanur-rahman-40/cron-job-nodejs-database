console.log("Service Worker Loaded...");



// const options = {
//     body: "Notified by Me",
//     icon: "https://lh3.googleusercontent.com/a-/AAuE7mDN_PMoTlp7uU78N9aYEYLSfqym08z9Rz924qW1Ig=k-s328",
//     badge: "https://lh3.googleusercontent.com/a-/AAuE7mDN_PMoTlp7uU78N9aYEYLSfqym08z9Rz924qW1Ig=k-s328",
//     image: "https://lh3.googleusercontent.com/a-/AAuE7mDN_PMoTlp7uU78N9aYEYLSfqym08z9Rz924qW1Ig=k-s328",
//     tag: "push-notification-tag",
//     vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500],
//     data: {
//         url: data.url
//     },
//     actions: [
//         {
//             action: 'coffee-action',
//             title: 'Coffee',
//             icon: "https://lh3.googleusercontent.com/a-/AAuE7mDN_PMoTlp7uU78N9aYEYLSfqym08z9Rz924qW1Ig=k-s328",
//         },
//         {
//             action: 'doughnut-action',
//             title: 'Doughnut',
//             icon: "https://lh3.googleusercontent.com/a-/AAuE7mDN_PMoTlp7uU78N9aYEYLSfqym08z9Rz924qW1Ig=k-s328",
//         },
//     ],
//     timestamp: Date.parse('01 Jan 2000 00:00:00')
// };

self.addEventListener('push', event => {
    const data = event.data.json()

    console.log('New notification', data)

    event.waitUntil(
        self.registration.showNotification(data.title,
            {
                body: data.description,
                icon: data.icon
            }
            // options
        )
    );
})