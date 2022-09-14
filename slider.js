
const slides = [];

const slide = document.getElementsByClassName('slide')[0];

function loadSlides() {
    for (let i = 1; i <= 3; i++){
        let newImg = `/img/${i}.jpeg`;
        slides.push(newImg);
    }
}

function setSlide(index) {
    slide.src = slides[index];
}



export { loadSlides, setSlide };