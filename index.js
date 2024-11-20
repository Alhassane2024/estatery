"use-strict";
const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");
const $header = document.querySelector("[data-header]");

// ICON MENU & MENU MOBILE 
$navToggler.addEventListener("click", ()=> {
    $navToggler.classList.toggle("active");
    $navbar.classList.toggle("active");
});

// HEADER ANIMATION TO SCROLL 
window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
})

// TAB FORM RENT BUY SELL 
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(tab => tab.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(button.dataset.tab).classList.add("active");
    })
})

// SCROLL LEFT RIGHT PROPRETIES 
const propertiesList = document.querySelector(".property-list");
const btnControls = document.querySelectorAll(".icon-controls");

btnControls.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("left")){
            propertiesList.scrollBy({ left: -200, behavior: 'smooth' });
        }else{
            propertiesList.scrollBy({ left: 200, behavior: 'smooth' });
        }
    })
})





