//==================================================================================

// Mouse auxclick

let button = document.querySelector('button');
let html = document.querySelector('html');

function random(number) {
    return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)},${random(255)},${random(255)})`;
}

button.onclick = function() {
    button.style.backgroundColor = randomColor();
};

button.addEventListener('auxclick', (e) => {
    e.preventDefault();
    button.style.backgroundColor = randomColor();
})

button.oncontextmenu = function(e) {
    e.preventDefault();
  }

//==================================================================================

// Click event

let btn = document.getElementById('button');

btn.addEventListener('click', (e) => {
    btn.innerHTML = `Click count: ${e.detail} `;
});

//==================================================================================

// Double click event
let card = document.querySelector('aside');

card.addEventListener('dblclick', () => {
    card.classList.toggle('large');
});


//==================================================================================

// Mouse down,move,up event

let isDrawing = false;
let x = 0;
let y = 0;

let myPics = document.getElementById('myPics');
let context = myPics.getContext('2d');

myPics.addEventListener('mousedown', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

myPics.addEventListener('mousemove', (e) => {
    if(isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener('mouseup', (e) => {
    if(isDrawing === true) {
        drawLine(context, x , y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
})

drawLine = (context, x1, y1, x2, y2) => {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}

//==================================================================================

// Mouse enter,leave event

let mouseTarget = document.getElementById('mouseTarget');
let unorderedList = document.getElementById('unorderedList');


mouseTarget.addEventListener('mouseenter', () => {
    mouseTarget.style.border = '5px solid green';
    mouseTarget.style.padding = '2rem';
    addListItem('This is mouseenter event ' );

});

mouseTarget.addEventListener('mouseleave', () => {
    mouseTarget.style.border = '1px solid black';
    mouseTarget.style.padding = '1rem';
    addListItem('This is mouseleave event ' );
});

addListItem = (text) => {
    var newText = document.createTextNode(text);

    var newItem = document.createElement('li');

    newItem.appendChild(newText);

    unorderedList.appendChild(newItem);
} 

//==================================================================================

// Mouse over event

let test = document.getElementById('test');

test.addEventListener('mouseenter', (event) => {
    event.target.style.color = "#33804a";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

test.addEventListener('mouseover', (event) => {
    event.target.style.color = "#d0d454";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500)
}, false);

//==================================================================================

// Mouse out event

let test2 = document.getElementById('test2');

test2.addEventListener('mouseleave', e => {
    e.target.style.color = "#33804a";

    setTimeout(function(){
        e.target.style.color = "";
    }, 1000);
}, false);

test2.addEventListener('mouseout', e => {
    e.target.style.color = "#d0d454";

    setTimeout(function() {
        e.target.style.color = "";
    }, 1000);
}, false);

//==================================================================================

// Mouse select event

function logSelection(event){
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

//==================================================================================

// Mouse wheel event

function zoom(event){
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apple scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.div2');
el.onwheel = zoom;