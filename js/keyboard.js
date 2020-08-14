//==================================================================================

// Keyboard down,up
const log = document.querySelector('#log');
const log2 = document.querySelector('#log2');

document.addEventListener('keydown', logDown);
document.addEventListener('keyup', logUp);

function logDown(e) {
  log.innerHTML += `For down: ${e.code}` + "<br>";
}

function logUp (e){
  log2.innerHTML += `For up: ${e.code}` + "<br>";
}

