// 1. Let's Talk modal
// 2. Portfolio image slider

// 1. Lets Talk modal

// lets-talk button in navbar
const letsTalkBtn = document.getElementById('lets-talk-btn')

// modal pop-up window
const overlayElement = document.getElementById('config-overlay')

// overlay backdrop
const backdropElement = document.getElementById('backdrop')

// close button in modal pop-up
const closeModalBtn = document.getElementById('close-modal')

// changing the modal and backdrop display from none to block to show it
function openModal() {
    overlayElement.style.display = 'block'
    backdropElement.style.display = 'block'
}

// changing the modal and backdrop display from block to none to hide it
function closeModal() {
    overlayElement.style.display = 'none'
    backdropElement.style.display = 'none'
}

// click eventlistner to open and close the modal
letsTalkBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)
backdropElement.addEventListener('click', closeModal)
closeModalBtn.addEventListener('click', closeModal)
backdropElement.addEventListener('click', closeModal)

// 2. Portfolio image slider

const slides = document.querySelectorAll('.slider-slide')
const dots = document.querySelectorAll('.slider-dot')
let currentSlide = 0

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none'
    })
    slides[index].style.display = 'block'
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.remove('active')
        if (i === currentSlide) {
            dot.classList.add('active')
        }
    })
}

showSlide(currentSlide)
updateDots()

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i
        showSlide(currentSlide)
        updateDots()
    })
})


// Link arrow animation
const portfolioLinks = document.getElementsByClassName('portfolio-link')

function linkAnimationOn() {
    const linkArrow = this.querySelector('.link-arrow')
    linkArrow.style.marginLeft = '3rem'
}

function linkAnimationOff() {
    const linkArrow = this.querySelector('.link-arrow')
    linkArrow.style.marginLeft = '0.5rem'
}

for (const portfolioLink of portfolioLinks) {
    portfolioLink.addEventListener('mouseover', linkAnimationOn)
    portfolioLink.addEventListener('mouseleave', linkAnimationOff)
}
