const rightElements = document.querySelectorAll('.right-element')
const leftElements = document.querySelectorAll('.left-element')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('right-show', entry.isIntersecting)
      if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
  { rootMargin: '-100px' }
)
rightElements.forEach((el) => {
  observer.observe(el)
})

const leftobserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('left-show', entry.isIntersecting)
      if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
  { rootMargin: '-100px' }
)

leftElements.forEach((el) => {
  observer.observe(el)
})
