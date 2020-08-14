
// Log event
const log = document.querySelector('.event-log-contents');
const badImg = document.querySelector('.bad-img');

badImg.addEventListener('error', (event) => {
    log.textContent = log.textContent + `${event.type}: Loading image\n`;
    console.log(event);
});

const imgError = document.querySelector('#img-error');
imgError.addEventListener('click',() => {
    badImg.setAttribute('src', 'i-dont-exist');
});

//==================================================================================

// Load event
const load = document.querySelector('.event-load-contents');
const reload = document.querySelector("#reload");

reload.addEventListener('click', () => {
  load.textContent = '';
  window.setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener('load', (event) => {
  load.textContent = load.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) => {
  load.textContent = load.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) => {
  load.textContent = load.textContent + `DOMContentLoaded\n`;
});


//==================================================================================




