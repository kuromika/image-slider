
const slides = [];

const slide = document.getElementsByClassName('slide')[0];
let currentSlide = 0;

function loadSlides() {
    for (let i = 1; i <= 3; i++){
        let newImg = `/img/${i}.jpeg`;
        slides.push(newImg);
    }
    if (slides.length > 0) {
        slide.src = slides[0];
    }
}

function setSlide(index) {
    slide.src = slides[index];
    currentSlide = index;
}

function nextSlide() {
    if (slides[currentSlide + 1] == undefined) {
        return;
    }
    setSlide(++currentSlide);
}

function previousSlide() {
    if (slides[currentSlide - 1] == undefined) {
        return;
    }
    setSlide(--currentSlide);
}



export { loadSlides, setSlide, nextSlide, previousSlide, slides };