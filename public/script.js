console.log("Beléptem");

document.getElementById('fetch-colors').onclick=fetchAndReadColors;

function fetchAndReadColors() {
    const response = await fetch('/color.json');
    const colors = await response.json();
    
    
    let colorsHTML = <h1>Színek</h1>;
    for(const color of colors){
        colorsHTML += `<div class='cards mb-2 w50'> 
                    <div class='card-body' style='background-color:${color.name}'>
                    <h5 class='card-title'>${color.name}</h5>
                    <p class='card-text'>${color.code}</p>
                    </div>
                    </div>`;
    }

    document.getElementById("color-list-component").innerHTML = colorsHTML;
}