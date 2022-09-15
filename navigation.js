import { slides, setSlide } from "./slider.js";

const navBar = document.getElementsByClassName('navigation')[0];

function createCircles() {
    for (let i = 0; i < slides.length; i++){
        let circleButton = document.createElement('button');
        circleButton.setAttribute('type', 'button');
        circleButton.classList.add('circle');
        circleButton.addEventListener('click', () => {
            setSlide(i);
            let prev = document.getElementsByClassName('selected')[0];
            if (prev != undefined) {
                prev.classList.remove('selected');
            }
            circleButton.classList.add('selected');
        })
        if (i == 0) {
            circleButton.classList.add('selected');
        }
        navBar.append(circleButton);
    }
}

export { createCircles };