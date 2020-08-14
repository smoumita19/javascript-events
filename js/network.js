//==================================================================================

// Online event event

const online = document.querySelector('.event-online-contents');

window.addEventListener('online', (event) => {
    online.textContent = online.textContent + 'You are now connected to the net';
    console.log("You are now connected to the net");
});

window.ononline = (event) => {
    console.log("Online");
};


//==================================================================================

// Offline event

const offline = document.querySelector('.event-offline-contents');

window.addEventListener('offline', (event) => {
    offline.textContent = offline.textContent + 'Your connection has been lost';
});