const title = document.querySelector('.title');
const logo = document.querySelector('.logo');
const textContent = document.querySelector('.text-content');
const theme = new Audio('../assets/audio/theme.mp3');
theme.volume = 0.5;

const MAX_SCROLL = 80;
const MIN_SCROLL = -75;

let currentScroll = 80;
let scrollEnabled = false;

/**
 * Update text scroll
 * @param {number} textScroll Text scroll value
 */
const updateScroll = (textScroll) => {
  textContent.style.transform = `rotateX(15deg) translateY(${textScroll}%)`;
};

// STARTUP SEQUENCE

/**
 * Enable text scroll
 */
const enableScroll = () => {
  scrollEnabled = true;
  updateScroll(currentScroll);
};

// Start timeline
setTimeout(() => {
  // Fade out title
  title.classList.add('fade-out');
  setTimeout(() => {
    // Play theme and show logo
    theme.play();
    logo.classList.remove('hide');
    setTimeout(() => {
      // Enable text scroll
      enableScroll();
    }, 1000);
  }, 1000);
}, 2000);

// AUTOMATIC SCROLL

/**
 * Scroll text automatically
 */
const loopScroll = () => {
  if (scrollEnabled) {
    updateScroll(currentScroll);
    if (currentScroll > MIN_SCROLL) currentScroll -= 0.15;
  }
};

setInterval(loopScroll, 100);

// MANUAL SCROLL

/**
 * Scroll text manually on mouse wheel
 */
window.addEventListener('wheel', (e) => {
  if (scrollEnabled) {
    currentScroll -= e.deltaY * 0.05;
    if (currentScroll > MAX_SCROLL) currentScroll = MAX_SCROLL;
    if (currentScroll < MIN_SCROLL) currentScroll = MIN_SCROLL;
    updateScroll(currentScroll);
  }
});

/**
 * Scroll text manually on touch
 */
let touchStart = 0;

window.addEventListener('touchstart', (e) => {
  if (scrollEnabled) {
    touchStart = e.touches[0].clientY;
  }
});

window.addEventListener('touchmove', (e) => {
  if (scrollEnabled) {
    let touchEnd = e.touches[0].clientY;
    currentScroll -= (touchStart - touchEnd) * 0.05;
    if (currentScroll > MAX_SCROLL) currentScroll = MAX_SCROLL;
    if (currentScroll < MIN_SCROLL) currentScroll = MIN_SCROLL;
    updateScroll(currentScroll);
    touchStart = touchEnd;
  }
});
