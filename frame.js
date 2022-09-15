import { loadArrows } from "./arrow.js";
import { createCircles } from "./navigation.js";
import { loadSlides } from "./slider.js";

function build() {
    loadSlides();
    loadArrows();
    createCircles();
}


export {build};