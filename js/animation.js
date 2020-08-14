//==================================================================================

// Animation start,cancel,end,iteration event

const animation = document.querySelector('p.animation');
const btn =  document.querySelector('.activate');
const log = document.querySelector('.event-log');
const interationCount = document.querySelector('.interation-count');
let count = 0;

btn.addEventListener('click', () => {
    animation.classList.toggle('active');
});

animation.addEventListener('animationstart', () => {
    log.textContent = '\'Animation Started\'';
});

animation.addEventListener('animationcancel', () => {
    log.textContent = '\'Animation Canceled\'';
});

animation.addEventListener('animationiteration', () => {
    count++;
    interationCount.innerHTML = `'animation iterations: ${count}'`;
});

animation.addEventListener('animationend', () => {
    log.textContent = '\'Active Animation\'';
    interationCount.innerHTML = `'animation iterations: ${count}'`;
    count = 0;
});