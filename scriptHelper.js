// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let target = document.getElementById("missionTarget");
    target.innerHTML = `
                        <h2>Mission Destination</h2>
                        <ol>
                            <li>Name:${name} </li>
                            <li>Diameter:${diameter} </li>
                            <li>Star: ${star}</li>
                            <li>Distance from Earth:${distance} </li>
                            <li>Number of Moons:${moons} </li>
                        </ol>
                        <img src="${imageUrl}">
                        `;
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

 //Validating fields for Empty, string and Number

 function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    }
    else if(isNaN(Number(testInput))){
        return "Not a Number";
    }
    else {
        return "Is a Number";
    }

 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {



    let pilotNameValidation = validateInput(pilot);
    let copilotValidation = validateInput(copilot);
    let fuelValidation = validateInput(fuelLevel);
    let cargoValidation = validateInput(cargoLevel);

    // let faultyItems = document.getElementById("faultyItems");
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


//Shuttle requirements
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            
            function notReadyForLaunch(){
                list.setAttribute("style","visibility:visible");
                launchStatus.setAttribute("style", "color:red;");
                launchStatus.innerHTML= "Shuttle Not Ready for Launch";
            }
         
            function fuelAlert(){
                fuelStatus.innerHTML = `Fuel level too low for launch`;
            }

            function cargoAlert(){
                cargoStatus.innerHTML = `Cargo mass too heavy for launch`;

            }

            // function allSet(){
            //     alert("all Set");
            // }

            if(fuelLevel >= 10000 && cargoLevel <= 10000){
                list.setAttribute("style","visibility:visible");
                launchStatus.setAttribute("style", "color:green;");
                launchStatus.innerHTML= "Shuttle is Ready for Launch";
                fuelStatus.innerHTML = `Fuel level high enough for launch`;
                cargoStatus.innerHTML = `Cargo mass low enough for launch`;

                return "preventSubmission";
                // setTimeout(allSet,10000);

            }else if(fuelLevel < 10000 && cargoLevel > 10000){
                notReadyForLaunch();
                fuelAlert();
                cargoAlert();
            
                return "preventSubmission";

            }if(fuelLevel < 10000){
                notReadyForLaunch();
                fuelAlert();
                // return "preventSubmission";

            }else{
                fuelStatus.innerHTML = `Fuel level high enough for launch`;

            }if(cargoLevel > 10000){
                notReadyForLaunch();
                cargoAlert();
                // return "preventSubmission";

            }else{
                cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            }
            return "preventSubmission";
            
 }
                

 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
   return planets[Math.floor(Math.random() * planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;