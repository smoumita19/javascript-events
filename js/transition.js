//==================================================================================

// Transition start,end,run event

const hover = document.querySelector('.transition');
const msg = document.querySelector('.message');

hover.addEventListener('transitionstart', () => {
    msg.innerHTML = 'Transition start fired!';
});

hover.addEventListener('transitioncancel', () => {
    msg.innerHTML = 'Transition cancel fired!';
});

hover.addEventListener('transitionrun', function() {
    msg.innerHTML = 'Transition run fired!';
});

hover.addEventListener('transitionend', () => {
    msg.innerHTML = 'Transition end fired!';
});