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
})
