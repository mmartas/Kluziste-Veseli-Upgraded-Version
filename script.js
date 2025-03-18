let menu = document.querySelector("#mobile-menu")
let menuLinks = document.querySelector(".navbar__menu")

menu.addEventListener("click", function(event){
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
})