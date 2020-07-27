window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         const destination = document.getElementById("missionTarget");
         destination.innerHTML =
            `
   <h2>Mission Destination</h2>
      <ol>
        <li>Name: ${json[5].name}</li>
        <li>Diameter: ${json[5].diameter}</li>
        <li>Star: ${json[5].star}</li>
        <li>Distance from Earth: ${json[5].distance}</li>
        <li>Number of Moons: ${json[5].moons}</li>
      </ol>
         <img src="${json[5].image}">
      `;
      })
   });
});

/*let form = document.querySelector("form");
let launchStatus = document.getElementById("launchStatus");
let faultyItems = document.getElementById("faultyItems");

form.addEventListener("submit", function (event) {
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

   if (pilotName.value === "" || copilotName.value === "" ||
      fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required!");
      event.preventDefault();
   };
});*/
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");
   form.addEventListener("submit", function (event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName.value === "" ||
         fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      };
   });
});