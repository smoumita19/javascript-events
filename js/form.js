//==================================================================================

// Form Reset
logReset = (event) => {
    log.innerHTML= `Form is reset! Time stamp: ${event.timeStamp}`;
}

const form = document.getElementById('form');
const btn = document.getElementById('button');
const log = document.getElementById('log');

form.addEventListener('reset', logReset);


//==================================================================================

// Form Submit

logSubmit = (event) => {
    log.innerHTML = `Form is submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
}

form.addEventListener('submit', logSubmit);
