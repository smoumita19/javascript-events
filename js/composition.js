//==================================================================================

// Composition Start, update, end

const input = document.querySelector('input[type="text"]');
const log = document.querySelector('.event-log-contents');
const clear = document.querySelector('.clear-log');

clear.addEventListener('click', () => {
    log.textContent = '';
})

handleEvent = (event) => {
    log.textContent =  `${event.type} : ${event.data}`;
}

input.addEventListener('compositionstart', handleEvent);
input.addEventListener('compositionupdate', handleEvent);
input.addEventListener('compositionend', handleEvent);