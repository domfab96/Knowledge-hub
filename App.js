const myCarouselElement = document.querySelector('#carouselExampleAutoplaying')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: false
})



const myCarouselElement = document.querySelector('#carouselExampleSlidesOnly')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 1800,
  touch: false
})



window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle(
    'window-scroll', window.scrollY > 0  )
})

