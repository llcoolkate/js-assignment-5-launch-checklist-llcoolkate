// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
let missionTarget = document.getElementById("missionTarget") 
missionTarget.innerHTML = `
<h2>Mission Destination</h2>
<ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
`
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(Number(testInput))=== true){
    return "Not a Number";
   } else if (isNaN(Number(testInput))=== false) {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let launchStatus = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   if (validateInput(pilot)== "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel)== "Empty" || validateInput(cargoLevel) == "Empty"){
    alert ("All fields are required.");
   } else if (validateInput(pilot)== "Is a Number" || validateInput(copilot)=="Is a Number") {
    alert ("Name required.")
   }
   else if (validateInput(fuelLevel)== "Not a Number" || validateInput(cargoLevel) == "Not a Number"){
    alert ("Number required");
   }
   if(fuelLevel < 10000) {
    launchStatus.innerHTML = "Shuttle Not Ready For Launch"
    fuelStatus.innerHTML = "Fuel Level too low for launch"
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`
    launchStatus.style.color = "red"
    list.style.visibility = "visible"    
   } else if (cargoLevel > 10000) {
    launchStatus.innerHTML = "Shuttle Not Ready For Launch"
    cargoStatus.innerHTML = "Cargo Mass too high for launch"
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`
    launchStatus.style.color = "red"
    list.style.visibility = "visible"    
   } else if(fuelLevel >= 10000 && cargoLevel <= 10000) {
    launchStatus.innerHTML = "Shuttle Is Ready For Launch"
    fuelStatus.innerHTML = "Fuel Level ok for launch"
    cargoStatus.innerHTML = "Cargo Mass ok for launch"
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`
    launchStatus.style.color = "green"
   list.style.visibility = "visible"    
   };
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await 
    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
};

function pickPlanet(planets) {
let planetIndex = Math.floor(Math.random()*planets.length);
return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
