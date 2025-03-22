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
    if(menuLinks.classList.contains("active")) {
        menuLinks.classList.remove("active")
        menu.classList.remove("is-active")
    }
})

// BROUŠENÍ
let sharpButton = document.querySelector("#navbar__links--sharping--button")
let sharping = document.querySelector(".sharping")
sharpButton.addEventListener("click", function(event){
    event.preventDefault();
    sharping.scrollIntoView({behavior: "smooth"});
    if(menuLinks.classList.contains("active")) {
        menuLinks.classList.remove("active")
        menu.classList.remove("is-active")
    }
})

// VÝCHOZÍ STAV/ZAČÁTEK
let logo = document.querySelector("#navbar__logo")
let pageStart = document.querySelector("header")
logo.addEventListener("click", function(event){
    event.preventDefault();
    pageStart.scrollIntoView({behavior: "smooth"});
    if(menuLinks.classList.contains("active")) {
        menuLinks.classList.remove("active")
        menu.classList.remove("is-active")
    }
})


let contactButton = document.querySelector("#navbar__btn--contact-button")
let contactRezervation = document.querySelector(".contact")
contactButton.addEventListener("click", function(event){
    event.preventDefault();
    contactRezervation.scrollIntoView({behavior: "smooth"});
    if(menuLinks.classList.contains("active")) {
        menuLinks.classList.remove("active")
        menu.classList.remove("is-active")
    }
})

let webkameraButton = document.querySelector("#navbar__links--webkamera--button")
let webkamera = document.querySelector(".webkamera__container")
webkameraButton.addEventListener("click", function(event){
    event.preventDefault()
    webkamera.scrollIntoView({behavior: "smooth"})
    if(menuLinks.classList.contains("active")) {
        menuLinks.classList.remove("active")
        menu.classList.remove("is-active")
    }
})