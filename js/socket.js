//==================================================================================

// Websocket open event

const socket = new WebSocket('wss://javascript.info/article/websocket/demo/hello');

socket.addEventListener('open', (event) => {
    socket.send('Hello Server!');
});

//==================================================================================

// Websocket message event

const message = document.querySelector('.event-message-contents');

socket.addEventListener('message', (event) => {
    message.textContent = message.textContent + event.data;
    console.log('Message from server ', event.data);
});

//==================================================================================

// Websocket error event

const close = document.querySelector('.event-close-contents');

socket.addEventListener('close', (event) => {
    close.textContent = close.textContent + 'The connection has been closed';
});

socket.onclose = function(event) {
    console.log('The connection has been closed');
}