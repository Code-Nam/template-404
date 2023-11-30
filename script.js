const h1 = document.querySelector('h1');
let zoom = 1;
const ZOOM_SPEED = 0.1;

document.addEventListener('wheel', (e) => {
  if (e.deltaY > 0){
    console.log(zoom)
    console.log(h1.style.fontSize)
    if (zoom >= 10) {
      h1.style.transform = `translateY(${(zoom += ZOOM_SPEED) * -10}px)`;
      return
    } else {
      h1.style.fontSize = `${zoom += ZOOM_SPEED}em`;
    }
  } else {
    if (zoom <= 0) return
    h1.style.fontSize = `${zoom -= ZOOM_SPEED}em`;
  }

})