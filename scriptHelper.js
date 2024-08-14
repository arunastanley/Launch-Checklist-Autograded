// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }

 
 function validateInput(testInput) {
    // let regex = /^[a-zA-Z ]+$/;
    if (testInput === ""){
        return "Empty";
    }
    else if(isNaN(Number(testInput))){
        return "Not a Number";
    }
    //check for test.. extra else if...the book asks only for empty, Nan, and is a number
    // else if(!regex.test(testInput)){
    //     return "Not a string";
    // }
    else {
        return "Is a Number";
    }

 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotNameValidation = validateInput(pilot.value);
    let copilotValidation = validateInput(copilot.value);
    let fuelValidation = validateInput(fuelLevel.value);
    let cargoValidation = validateInput(cargoLevel.value);

    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
   

            if(pilotNameValidation === "Empty" || copilotValidation === "Empty" || fuelValidation === "Empty" || cargoValidation ==="Empty") {
                alert("All fields are required");
                return "preventSubmission";
            } 
            else if(pilotNameValidation === "Is a Number" || copilotValidation === "Is a Number" ){
                alert("Pilot and Co-Pilot names should be strings");
                return "preventSubmission";
            }
            else if(fuelValidation === "Not a Number" || cargoValidation === "Not a Number" ){
                alert("Fuel and Cargo levels should be numbers");
                return "preventSubmission";
            }

            pilotStatus.innerHTML = `Pilot ${pilot.value} Ready`;
            copilotStatus.innerHTML = `Co-pilot ${copilot.value} Ready`;
            

            if(fuelLevel.value < 10000){
                faultyItems.setAttribute("style","visibility:visible");
                fuelStatus.innerHTML = `Not enough fuel for the journey`;
                launchStatus.setAttribute("style", "color:red;");
                launchStatus.innerHTML= "Shuttle not ready for launch";
                return "preventSubmission";
            }else if(cargoLevel.value > 10000){
                faultyItems.setAttribute("style","visibility:visible");
                cargoStatus.innerHTML = `Too much mass for the shuttle to take off`;
                launchStatus.setAttribute("style", "color:red;");
                launchStatus.innerHTML= "Shuttle not ready for launch";
                return "preventSubmission";
            }else{
                
                launchStatus.setAttribute("style", "color:green;");
                launchStatus.innerHTML= "Shuttle is ready for launch";
                 return "preventSubmission";
                }
            }
                

 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;