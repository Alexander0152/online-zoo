let darkTheme = false;
const BODY = document.querySelector('body');

/* SWITCH THEME */

function swithTheme() {
  if (!darkTheme) {
    BODY.classList.add('dark_theme');

  }
  else {
    BODY.classList.remove('dark_theme');
  }
  darkTheme = !darkTheme;
}

/* WATCH YOUR FAVORITE ANIMAL */

const WARCH_YOUR_fAV_RANGE_COUNT = document.querySelector('#watchYourFavRangeCount');
const PAGINATION_WHITE = document.querySelector('#paginationWhite');
function watchYourFavSlider(value) {
  WARCH_YOUR_fAV_RANGE_COUNT.textContent = '0' + value + '/';
  let slides = document.getElementsByClassName("galery_item");
  galerySliderMove(slides[value * 1 - 1]);
}

function galerySliderMove(element) {
  let dots = document.getElementsByClassName("galery_item");

  let newActivePos;
  for (i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains('galery_item_active')) {
      dots[i].classList.remove('galery_item_active');
      break;
    }
  }
  element.classList.add('galery_item_active');
  for (i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains('galery_item_active')) {
      newActivePos = i;
      break;
    }
  }
  let shift = (1 - newActivePos) * 183;
  for (i = 0; i < dots.length; i++) {
    dots[i].style.transform = "translateX(" + shift + "px)"
  }
  WARCH_YOUR_fAV_RANGE_COUNT.textContent = '0' + (newActivePos * 1 + 1) + '/';
  PAGINATION_WHITE.value = newActivePos + 1;
}

/* HOW IT WORKS */

const HOW_IT_WORKS_RANGE_COUNT = document.querySelector('#howItWorksRangeCount');
function howItWorksSlider(value) {
  HOW_IT_WORKS_RANGE_COUNT.textContent = '0' + value + '/';
  let slides = document.getElementsByClassName("how_it_works_slider_item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[value - 1].style.display = "initial";
}

/* PETS IN ZOO */

const PAGINATION_PETS_IN_ZOO = document.querySelector('#petsInZooPagination');
const PAG_INPUT_PETS_IN_ZOO = document.querySelector('#petsInZooPagInput');

const gap = 30;
const carousel = document.getElementById("carousel");
let PETS_COUNT = 1;

function petsInZooSlider(value) {
  PAGINATION_PETS_IN_ZOO.textContent = '0' + value + '/';
  if(value > PETS_COUNT){
    petsSliderNext();
  }
  else{
     petsSliderPrev();
  }
}

function petsSliderNext(){
  PETS_COUNT++;
  if (PETS_COUNT === 9) {
    carousel.scrollBy(-8*(width + gap), 0);
    PETS_COUNT = 1;
    setPetsInZooPagination();
    return;
  }
  carousel.scrollBy(width + gap, 0);
  setPetsInZooPagination();
}

function petsSliderPrev(){
  PETS_COUNT--;
  if (PETS_COUNT === 0) {
    carousel.scrollBy(8*(width + gap), 0);
    PETS_COUNT = 8;
    setPetsInZooPagination();
    return;
  }
  carousel.scrollBy(-(width + gap), 0);
  setPetsInZooPagination();
}

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

function setPetsInZooPagination(){
  PAGINATION_PETS_IN_ZOO.textContent = '0' + (PETS_COUNT) + '/';
  PAG_INPUT_PETS_IN_ZOO.value = PETS_COUNT;
}
