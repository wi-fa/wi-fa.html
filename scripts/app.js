// Description
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
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider')
    const slides = document.querySelectorAll('.slide')
    const dotsContainer = document.querySelector('.slider-dots')

    let currentSlide = 0

    // Create navigation dots for each slide

    slides.forEach((slide, index) => {
        const dot = document.createElement('div')
        dot.classList.add('dot')
        dot.addEventListener('click', () => {
            goToSlide(index)
        })
        dotsContainer.appendChild(dot)
    })

    const dots = document.querySelectorAll('.dot')

    function goToSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= slides.length) return

        currentSlide = slideIndex
        slider.style.transform = `translateX(-${slideIndex * 100}%)`

        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide)
        })
    }

    // Initial slide
    goToSlide(currentSlide)
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
