// HAMBURGER MENU/KŘÍŽEK MOBILNÍ VERZE
let menu = document.querySelector("#mobile-menu")
let menuLinks = document.querySelector(".navbar__menu")

menu.addEventListener("click", function(event){
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
})

// CENÍK
let priceButton = document.querySelector("#navbar__links--price--button")
let pricing = document.querySelector(".pricing")
priceButton.addEventListener("click", function(event){
    event.preventDefault();
    pricing.scrollIntoView({behavior: "smooth"});
})

// BROUŠENÍ
let sharpButton = document.querySelector("#navbar__links--sharping--button")
let sharping = document.querySelector(".sharping")
sharpButton.addEventListener("click", function(event){
    event.preventDefault();
    sharping.scrollIntoView({behavior: "smooth"});
})

// VÝCHOZÍ STAV/ZAČÁTEK
let logo = document.querySelector("#navbar__logo")
let pageStart = document.querySelector("header")
logo.addEventListener("click", function(event){
    event.preventDefault();
    pageStart.scrollIntoView({behavior: "smooth"})
})