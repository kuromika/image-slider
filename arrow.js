import { previousSlide, nextSlide } from "./slider.js";

const leftArrow = document.getElementsByClassName('left arrow')[0];
const rightArrow = document.getElementsByClassName('right arrow')[0];

function loadArrows() {

    leftArrow.addEventListener('click', previousSlide);
    rightArrow.addEventListener('click', nextSlide);
    window.addEventListener('keydown', (e) => {
        if (e.code == 'ArrowLeft') {
            previousSlide();
        } else if (e.code == 'ArrowRight') {
            nextSlide();
        }
    });
}


export { loadArrows };

