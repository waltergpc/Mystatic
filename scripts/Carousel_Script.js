const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')
const navDots = document.querySelector('.carousel-nav')
const dots = Array.from(navDots.children)
console.log(navDots)

let slideWidth = slides[0].getBoundingClientRect().width

const getSlideWidth = () => {
  return slides[0].getBoundingClientRect().width
}

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
  currentSlide.classList.remove('current-slide')
  targetSlide.classList.add('current-slide')
}

const moveToDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide')
  targetDot.classList.add('current-slide')
}

const hideArrow = (targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden')
    nextButton.classList.remove('is-hidden')
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden')
    nextButton.classList.add('is-hidden')
  } else {
    prevButton.classList.remove('is-hidden')
    nextButton.classList.remove('is-hidden')
  }
}

nextButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling
  const currentDot = navDots.querySelector('.current-slide')
  const nextDot = currentDot.nextElementSibling
  const nextIndex = slides.findIndex((slide) => slide === nextSlide)

  moveToSlide(track, currentSlide, nextSlide)
  moveToDots(currentDot, nextDot)
  hideArrow(nextIndex)
})

prevButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide')
  const prevSlide = currentSlide.previousElementSibling
  const currentDot = navDots.querySelector('.current-slide')
  const prevDot = currentDot.previousElementSibling
  const prevIndex = slides.findIndex((slide) => slide === prevSlide)

  moveToSlide(track, currentSlide, prevSlide)
  moveToDots(currentDot, prevDot)
  hideArrow(prevIndex)
})

navDots.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button')
  if (!targetDot) return

  const currentSlide = track.querySelector('.current-slide')
  const currentDot = navDots.querySelector('.current-slide')
  const targetIndex = dots.findIndex((dot) => dot === targetDot)
  const targetSlide = slides[targetIndex]

  moveToSlide(track, currentSlide, targetSlide)

  moveToDots(currentDot, targetDot)

  hideArrow(targetIndex)
})
