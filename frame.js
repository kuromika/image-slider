import { loadSlides, setSlide } from "./slider.js";

function build() {
    loadSlides();
    setSlide(2);
}


export {build};