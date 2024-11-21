"use-strict";

// import { response } from "express";

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

// WORK WITH API 
// fetch("/api/properties/all") 
// .then(response => response.json())
// .then(data => {console.log(data);
// })

async function fetchProperties(){
    try {
        const response = await fetch("/api/properties/allproperties");
        const properties = await response.json();
        console.log(properties);
        
        displayProperties(properties);
    } catch (error) {
        
    }
}

function displayProperties(properties){
    const propertiesList = document.getElementById("property-list");
    propertiesList.innerHTML = " ";
    properties.forEach(property =>{
        const propertyCard = document.createElement("div");
        propertyCard.className = "property-card";
        propertyCard.innerHTML = 
        `
                      <img src="${property.image_url}" alt="Property 1">
    
                      <div class="badge-property">
                        <img src="./assets/awesome.svg" alt="awesome icon">
                        <p class="badge-text">Popular</p>
                      </div>
    
                      <div class="property-text-container">
    
                        <div class="price-and-favourite-icon-container">
    
                            <p class="property-price title-large">$2,095 / month</p>
                            <ion-icon name="heart-outline"  class="heart-icon" aria-hidden="true" ></ion-icon>
                        </div>
      
                        <div class="other-text-property">
    
                            <h2 class="title-large" id="h2">${property.name}</h2>
                            <p class="body-one-rem">${property.location}</p>
                            <hr style="width: 100%;">
      
                            <div class="ameneties-container">
    
                            <div class="ameneties">
                                <img src="./assets/Bed.svg" alt="">
                                <p >3</p>
                            </div>
      
                            <div class="ameneties">
                                <img src="./assets/Bath.svg" alt="">
                                <p>3</p>
                            </div>
      
                            <div class="ameneties">
                                <img src="./assets/Square Meters.svg" alt="">
                                 <p >5x7m²</p>
                             </div>
                      </div>
                        </div>
    
                      
                      </div>
            
        `
        propertiesList.appendChild(propertyCard);
    })
    
    
}

document.addEventListener("DOMContentLoaded", fetchProperties);





