const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

rightArrow.addEventListener('click', function(){
   slider.style.transform = 'translate(-25%)';
});