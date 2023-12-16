const img1 = document.querySelector('#img-1');
const img2 = document.querySelector('#img-2');
const img3 = document.querySelector('#img-3');
const img1_bottomHeight = img1.offsetTop + img1.clientHeight;
const img1_topHeight = img1.offsetTop;
const img2_bottomHeight = img2.offsetTop + img2.clientHeight;
const img3_bottomHeight = img3.offsetTop + img3.clientHeight;

window.addEventListener('load', function() {
  window.scrollTo(0, 0);
});

const animation = document.querySelector('.first-fg');
const body = document.body;
animation.addEventListener('animationend', () => {body.style.overflow = 'auto';});

window.addEventListener('scroll', () => {
  const scrollValue = window.innerHeight + window.scrollY;
  
  const getPercentage = (min, max) => {
    return ((scrollValue - min) / (max - min)) * 100;
  }


  img1_translateX = -100 + (getPercentage(img1_topHeight, img1_bottomHeight));
  img2_translateX = -100 + (getPercentage(img1_bottomHeight, img2_bottomHeight));
  img3_translateX = -100 + ((getPercentage(img2_bottomHeight, img3_bottomHeight)));


  
  if (img1_translateX >= 0){
    img1_translateX = 0;
  } 
  if (img2_translateX >= 0){
    img2_translateX = 0;
  }
  if (img3_translateX >= 0){
    img3_translateX = 0;
  }


  img1.style.transform = `translateX(${img1_translateX}%)`;
  img2.style.transform = `translateX(${img2_translateX}%)`;
  img3.style.transform = `translateX(${img3_translateX}%)`;
})