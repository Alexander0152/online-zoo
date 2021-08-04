
/* SWITCH THEME */

let darkTheme = false;
const BODY = document.querySelector('body');


function swithTheme() {
    if (!darkTheme) {
        BODY.classList.add('dark_theme');

    }
    else {
        BODY.classList.remove('dark_theme');
    }
    darkTheme = !darkTheme;
}


/* SLIDER */

const POINTERS = [1, 2, 3, 4];
const BTN_WATCH_LINK = document.querySelector('#btnWatchOnlineLink');

const PAGINATION_OUTPUT = document.querySelector('#pagOutput');
const PAGINATION_INPUT = document.querySelector('#pagInput');

let activePos = 2;
function sliderPagination(value) {
    PAGINATION_OUTPUT.textContent = '0' + value + '/';
    value * 1 > activePos ? petsSliderNext() : petsSliderPrev();
    activePos = value * 1;
    sliderMove();
    changeBtnWatchLink();
    PAGINATION_INPUT.value = activePos;
}

function sliderMoveOnClick(direction) {
    direction === 'next' ? activePos++ : activePos--;
    if (activePos === 9) {
        activePos = 1;
    }
    else if (activePos === 0) {
        activePos = 8;
    }
    sliderPagination(activePos);
    PAGINATION_INPUT.value = activePos;
}

function sliderMove() {
    let slides = document.getElementsByClassName("map_slider_item");

    for (i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('map_slider_item_chosen')) {
            slides[i].classList.remove('map_slider_item_chosen');
            break;
        }
    }
    for (i = 0; i < slides.length; i++) {
        if (i + 1 === activePos) {
            slides[i].classList.add('map_slider_item_chosen');
            break;
        }
    }
    activatePointer();
}

function activatePointer() {
    let pointersList = document.getElementsByClassName("map_pointer");

    for (i = 0; i < pointersList.length; i++) {
        if (pointersList[i].classList.contains('map_pointer_active')) {
            pointersList[i].classList.remove('map_pointer_active');
            break;
        }
    }
    switch (activePos) {
        case 1:
            pointersList[2].classList.add('map_pointer_active');
            break;
        case 2:
            pointersList[3].classList.add('map_pointer_active');
            break;
        case 3:
            pointersList[1].classList.add('map_pointer_active');
            break;
        case 4:
            pointersList[0].classList.add('map_pointer_active');
            break;
    }
}

function pointerClick(element) {
    let pointersList = document.getElementsByClassName("map_pointer");
    let pointerNumber = 1;

    for (i = 0; i < pointersList.length; i++) {
        if (pointersList[i].classList.contains('map_pointer_active')) {
            pointersList[i].classList.remove('map_pointer_active');
            break;
        }
    }
    for (i = 0; i < pointersList.length; i++) {
        if (pointersList[i] === element) {
            pointersList[i].classList.add('map_pointer_active');
            pointerNumber = i + 1;
            break;
        }
    }

    switch (pointerNumber) {
        case 1:
            sliderPagination(4);
            BTN_WATCH_LINK.href = "../live_broadcast/eagle.html"
            break;
        case 2:
            sliderPagination(3);
            BTN_WATCH_LINK.href = "../live_broadcast/crocodile.html"
            break;
        case 3:
            sliderPagination(1);
            BTN_WATCH_LINK.href = "../live_broadcast/gorilla.html"
            break;
        case 4:
            sliderPagination(2);
            BTN_WATCH_LINK.href = "../live_broadcast/panda.html"
            break;
    }

    PAGINATION_INPUT.value = activePos;
}

function changeBtnWatchLink(){
    switch (activePos) {
        case 1:
            BTN_WATCH_LINK.href = "../live_broadcast/gorilla.html"
            break;
        case 2:
            BTN_WATCH_LINK.href = "../live_broadcast/panda.html"
            break;
        case 3:
            BTN_WATCH_LINK.href = "../live_broadcast/crocodile.html"
            break;
        case 4:
            BTN_WATCH_LINK.href = "../live_broadcast/eagle.html"
            break;
    }
}

/* SLIDER SCROLL */
const gap = 30;
const carousel = document.getElementById("mapCarousel");


function petsSliderNext() {
    if (activePos === 1) {
        carousel.scrollBy(-8 * (width + gap), 0);
        return;
    }
    if (activePos >= 4 && activePos <= 8) {
        carousel.scrollBy(155, 0);
    }
}

function petsSliderPrev() {
    if (activePos === 8) {
        carousel.scrollBy(8 * (width + gap), 0);
        return;
    }
    if (activePos <= 4 && activePos >= 1) {
        carousel.scrollBy(-155, 0);
    }
}

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));