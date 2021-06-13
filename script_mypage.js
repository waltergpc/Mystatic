console.log("hola mundo");

const Dark_button= document.querySelector("#Dark-mode");

const Mode= document.querySelector("#mode-link");

Dark_button.addEventListener("click", function() {
    if(Mode.getAttribute("href") == "styles.css") {
        Mode.href = "styles-dark.css"
    } else {
        Mode.href = "styles.css"
    };
});

const Drop= document.querySelector("#dropdown");





function change_display() {
    const Menu= document.getElementById("nav");
    if(Menu.style.display == "none") {
        Menu.style.display = "flex"
    } else {
        Menu.style.display = "none"
    } }



