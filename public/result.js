const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const minPrice = urlParams.get("minPrice");

const querParams = new URLSearchParams({name: name || "", minPrice: minPrice || ""}).toString();
console.log(querParams);

fetch(`api/properties/filterproperties?${querParams}`)
.then(response => response.json())
.then(data => displayResults(data))
.catch(error => console.error('Erreur:', error));

function displayResults(properties){
    const propertiesContainer = document.getElementById("filtered-properties");
    propertiesContainer.innerHTML = "";

    if(properties.length == 0){
        propertiesContainer.innerHTML = "Aucun résultat ne correspond";
        return;
    }

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
    
                            <p class="property-price title-large">$${property.price} / month</p>
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
        propertiesContainer.appendChild(propertyCard);
    })
}