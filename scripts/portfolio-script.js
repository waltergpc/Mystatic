const descButtons = document.querySelectorAll('#description-button')

console.log(descButtons)

descButtons.forEach((button) => {
  const fullDescription = button.nextElementSibling
  const container = button.parentNode.parentNode
  button.addEventListener('click', () => {
    fullDescription.classList.toggle('visible-desc')
    container.classList.toggle('extended')
  })
})
