const title = document.querySelector('.title');
const logo = document.querySelector('.logo');
const textContent = document.querySelector('.text-content');
const theme = new Audio('../assets/audio/theme.mp3');
theme.volume = 0.5;

let textScroll = 80;

const loopScroll = () => {
  setTimeout(() => {
    textContent.style.transform = `rotateX(15deg) translateY(${textScroll}%)`;
    textScroll -= 0.35;
    if (textScroll > -100) {
      loopScroll();
    } else {
      location.reload();
    }
  }, 100);
}

setTimeout(() => {
  title.classList.add('fade-out');
  setTimeout(() => {
    theme.play();
    logo.classList.remove('hide');
      setTimeout(() => { // Start Loop Scroll
        loopScroll();
      }, 1000);
  }, 1000);
}, 2000);


