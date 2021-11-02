console.log("hola mundo");

const Dark_button= document.querySelector("#Dark-mode");

const Mode= document.querySelector("#body");

Dark_button.addEventListener("click", function() {
    if(Mode.className == "body-light") {
        Mode.className = "body-dark"
    } else {
        Mode.className = "body-light"
    };
});

const Drop= document.querySelector("#dropdown");




