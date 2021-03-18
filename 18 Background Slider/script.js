const slides = document.querySelectorAll('.slide')
const arrowRight = document.getElementById('right')
const arrowLeft = document.getElementById('left')

let currentSlide = 0

setBgToBody()

arrowRight.addEventListener('click', () => {
    nextSlide()
})

arrowLeft.addEventListener('click', () => {
    backSlide()
})

function nextSlide() {
    slides[currentSlide].classList.remove('active')
    currentSlide++
    if(currentSlide == slides.length) {
        currentSlide = 0
    }
    slides[currentSlide].classList.add('active')
    setBgToBody()
}

function backSlide() {
    slides[currentSlide].classList.remove('active')
    currentSlide--
    if(currentSlide == -1) {
        currentSlide = (slides.length -1)
    }
    slides[currentSlide].classList.add('active')
    setBgToBody()
    document.body.style.height = '100vh'
}

function setBgToBody() {
    document.body.style.backgroundImage = slides[currentSlide].style.backgroundImage
}