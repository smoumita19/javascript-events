//==================================================================================

// Focus/Blur event

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
});

password.addEventListener('blur', (event) => {
    event.target.style.background = '';
});

//==================================================================================

// Focusin/Focusout event

const form = document.querySelector('.form');

form.addEventListener('focusin', (event) => {
    event.target.style.background = 'pink';
});

form.addEventListener('focusout', (event) => {
    event.target.style.background = '';
})