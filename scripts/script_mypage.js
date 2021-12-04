console.log('hola mundo')

const theme = localStorage.getItem('theme')
const Dark_button = document.querySelector('#Dark-mode')
const Mode = document.querySelector('#body')
const headBlock = document.querySelector('.head-block')
const codeDiv = document.querySelectorAll('#codediv')
const nav = document.querySelector('.nav')

if (theme) {
  Mode.className = theme
  if (theme === 'body-dark') {
    headBlock.classList.add('dark_head')
    nav.classList.add('responsive_back')
    codeDiv.forEach((el) => {
      el.classList.add('dark')
      el.classList.remove('light')
    })
  }
}

Dark_button.addEventListener('click', function () {
  if (Mode.className == 'body-light') {
    Mode.className = 'body-dark'
    headBlock.classList.add('dark_head')
    nav.classList.add('responsive_back')
    codeDiv.forEach((el) => {
      el.classList.add('dark')
      el.classList.remove('light')
    })
    localStorage.setItem('theme', Mode.className)
  } else {
    Mode.className = 'body-light'
    headBlock.classList.remove('dark_head')
    nav.classList.remove('responsive_back')
    codeDiv.forEach((el) => {
      el.classList.add('light')
      el.classList.remove('dark')
    })
    localStorage.setItem('theme', Mode.className)
  }
})

const Drop = document.querySelector('#dropdown')
