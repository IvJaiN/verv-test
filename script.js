document.addEventListener('DOMContentLoaded', () => {

    const linkBtn = document.querySelector('.services-btn')
    const cardsParent = document.querySelector('.services-prices')
    const cards = document.querySelectorAll('.services-price')

    cardsParent.addEventListener('click', (e) => {
        cards.forEach((card, idx) => {
            card.classList.remove('_active')
            if (e.target === card || e.target.parentNode === card || e.target.parentNode.parentNode === card) {
                card.classList.add('_active')
                if (idx === 0) {
                    linkBtn.href = 'https://www.google.com/search?q=1'
                } else if (idx === 1) {
                    linkBtn.href = 'https://www.google.com/search?q=2'
                } else if (idx === 2) {
                    linkBtn.href = 'https://www.google.com/search?q=3'
                }
            }
        })
    })

//    slider

    const slider = document.querySelector('.slider')
    const slides = document.querySelectorAll('.slider-item')
    const sliderTrack = document.querySelector('.slider-track')
    const currentWidth = parseInt(window.getComputedStyle(slides[0]).width)

    let currentSlide = 0


    // sliderTrack.style.transform = `translateX(-${(currentWidth + 9) * (slides.length - 1) }px)`
    function swipeRight(width = currentWidth) {
        sliderTrack.style.transition = '0.5s'
        currentSlide++
        sliderTrack.style.transform = `translateX(-${(currentWidth + 7.5) * currentSlide}px)`
        if (currentSlide === slides.length - 1) {
            clearInterval(interval)
        }
    }
    function swipeLeft(width = currentWidth) {
        sliderTrack.style.transition = '0.5s'
        currentSlide--
        sliderTrack.style.transform = `translateX(-${(currentWidth + 7.5) * currentSlide}px)`
    }
    let interval = null
    function autoPlay() {
        interval = setInterval(swipeRight, 1000)
    }
    autoPlay()

    // swipe

    let startX = null
    let currentX = null
    let resultX = null

    slider.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX
    })
    slider.addEventListener('touchmove', e => {
        clearInterval(interval)
        currentX = e.touches[0].clientX
        resultX = startX - currentX
    })
    slider.addEventListener('touchend', () => {
        if (resultX > 0 && currentSlide !== slides.length - 1) {
            swipeRight()
        } else if (resultX < 0 && currentSlide) {
            swipeLeft()
        }
    })
})
