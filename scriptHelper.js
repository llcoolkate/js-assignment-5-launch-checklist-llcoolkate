// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
let finalMissionDestination = document.getElementById("missionTarget");
finalMissionDestination.innerHTML = 
                <><h2>Mission Destination</h2><ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol><img src="${imageUrl}"></img></>}

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
   let fuelLevel = document.getElementById("fuelStatus");
   let cargoLevel = document.getElementById("cargoStatus");

   if (validateInput(pilot.value)== "Empty" || validateInput(copilot.value) == "Empty" || validateInput(fuelLevel.value)== "Empty" || validateInput(cargoLevel.value) == "Empty"){
    alert ("All fields are required.");
   } else if (validateInput(pilot.value)== "Is a Number" || validateInput(copilot.value)=="Is a Number") {
    alert ("Name required.")
   }
   else if (validateInput(fuelLevel.value)== "Not a Number" || validateInput(cargoMass.value) == "Not a Number"){
    alert ("Number required");
   }
   if(fuelLevel <10000) {
    launchStatus.innerHTML = "Shuttle Not Ready For Launch"
    fuelStatus.innerHTML = "Fuel Level too low for launch"
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`
    launchStatus.style.color = "red"
    list.style.visability = "visible"    
   } else if (cargoLevel > 10000) {
    launchStatus.innerHTML = "Shuttle Not Ready For Launch"
    cargoStatus.innerHTML = "Cargo Mass too high for launch"
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`
    launchStatus.style.color = "red"
    list.style.visability = "visible"    
   } else if(fuelLevel >= 10000 && cargoLevel <= 10000) {
    launchStatus.innerHTML = "Shuttle Is Ready For Launch"
    fuelStatus.innerHTML = "Fuel Level ok for launch"
    cargoStatus.innerHTML = "Cargo Mass ok for launch"
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`
    launchStatus.style.color = "green"
   // list.style.visability = "visible"    
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
