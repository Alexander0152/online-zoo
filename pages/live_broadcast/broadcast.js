
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

let activePos = 1;

function sliderMove(direction) {
    direction === "up" ? activePos-- : activePos++;
    if (activePos === 0) {
        activePos = 4;
    }
    else if (activePos === 5) {
        activePos = 1;
    }

    let slides = document.getElementsByClassName("side_menu_item");

    for (i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('side_slider_item_chosen')) {
            slides[i].classList.remove('side_slider_item_chosen');
            break;
        }
    }
    for (i = 0; i < slides.length; i++) {
        if (i + 1 === activePos) {
            slides[i].classList.add('side_slider_item_chosen');
            break;
        }
    }
}

const MAIN_SCREEN = document.querySelector('#mainScreen');
const FIRST_PREVIEW = document.querySelector('#firstPreview');
const SECOND_PREVIEW = document.querySelector('#secondPreview');
const THIRD_PREVIEW = document.querySelector('#thirdPreview');
function changeMainScreen(previewNamber){
    let previousPrev = (' ' + MAIN_SCREEN.src).slice(1);
    switch (previewNamber) {
        case 1:
            MAIN_SCREEN.src = FIRST_PREVIEW.src;
            FIRST_PREVIEW.src = previousPrev
            break;
        case 2:
            MAIN_SCREEN.src = SECOND_PREVIEW.src;
            SECOND_PREVIEW.src = previousPrev
            break;
        case 3:
            MAIN_SCREEN.src = THIRD_PREVIEW.src;
            THIRD_PREVIEW.src = previousPrev
            break;
    }
}