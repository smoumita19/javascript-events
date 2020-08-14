//==================================================================================

// Full Screen 

const screen = document.getElementById('fullscreen-div');
const btn = document.getElementById('toggle-fullscreen');

document.getElementById('fullscreen-div').addEventListener('fullscreenchange', (event) => {
    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If not, the value
    // of the property is null.
    if (document.fullscreenElement) {
      console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
    } else {
      console.log('Leaving full-screen mode.');
    }
  });
  
btn.addEventListener('click', (event) => {
    if(document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        screen.requestFullscreen();
    }
});

//==================================================================================

// Resize Screen 

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

reportWindowSize = () => {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

//==================================================================================

// Scroll Screen 
const scrolly = document.getElementById('scrolly');

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    // console.log(window.scrollY);
    scrolly.innerHTML = window.scrollY;
  // Do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});