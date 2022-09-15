
const slides = [];

const slide = document.getElementsByClassName('slide')[0];
let currentSlide = 0;

function loadSlides() {
    for (let i = 1; i <= 5; i++){
        let newImg = `./img/image${i}.jpeg`;
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
    currentSlide++;
    updateCircle(currentSlide);
    setSlide(currentSlide);
}

function previousSlide() {
    if (slides[currentSlide - 1] == undefined) {
        return;
    }
    currentSlide--;
    updateCircle(currentSlide);
    setSlide(currentSlide);
}


function updateCircle(index) {
    let prev = document.getElementsByClassName('selected')[0];
    if (prev != undefined) {
        prev.classList.remove('selected');
    }
    let circle = document.getElementsByClassName('circle')[index];
    circle.classList.add('selected');
}


export { loadSlides, setSlide, nextSlide, previousSlide, slides };