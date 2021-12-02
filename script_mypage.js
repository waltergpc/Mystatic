console.log("hola mundo")

const Dark_button = document.querySelector("#Dark-mode")

const Mode = document.querySelector("#body")
const headBlock = document.querySelector(".head-block")
const codeDiv = document.querySelectorAll("#codediv")
const nav = document.querySelector(".nav")

Dark_button.addEventListener("click", function () {
  if (Mode.className == "body-light") {
    Mode.className = "body-dark"
    headBlock.classList.add("dark_head")
    nav.classList.add("responsive_back")
    codeDiv.forEach((el) => {
      el.classList.add("dark")
      el.classList.remove("light")
    })
  } else {
    Mode.className = "body-light"
    headBlock.classList.remove("dark_head")
    nav.classList.remove("responsive_back")
    codeDiv.forEach((el) => {
      el.classList.add("light")
      el.classList.remove("dark")
    })
  }
})

const Drop = document.querySelector("#dropdown")
