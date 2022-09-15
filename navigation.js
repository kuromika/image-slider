import { slides } from "./slider.js";
import { setSlide } from "./slider.js";

const navBar = document.getElementsByClassName('navigation')[0];
const buttons = [];

function createCircles() {
    for (let i = 0; i < slides.length; i++){
        let circleButton = document.createElement('button');
        circleButton.setAttribute('type', 'button');
        circleButton.classList.add('circle');
        circleButton.addEventListener('click', () => {
            setSlide(i);
        })
        buttons.push(circleButton);
        navBar.append(circleButton);
    }
}

export { loadCircles };