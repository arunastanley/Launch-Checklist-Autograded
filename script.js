// Write your JavaScript code here!

window.addEventListener("load", function() {

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    let list = "incomplete";
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");  
    let cargoMass = document.querySelector("input[name=cargoMass]"); 
    let form = document.querySelector("form");
            form.addEventListener("submit", function(event) {    
                let returnOnFormSubmit = formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
                    if(returnOnFormSubmit ===  "preventSubmission") {
                    event.preventDefault();
                    }
            
            })

    
 });