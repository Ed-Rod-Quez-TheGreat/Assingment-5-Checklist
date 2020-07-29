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
      } else if (Number(fuelLevel.value) < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
         document.getElementById("fuelStatus").innerHTML = "Not enough fuel for launch"
         if (Number(cargoMass.value) > 10000) {
            document.getElementById("cargoStatus").innerHTML = "There is  too much mass for the shuttle to take off"
         }
         event.preventDefault();
      
      } else if (Number(cargoMass.value) > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("launchStatus").style.color = "red"; 
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
         document.getElementById("cargoStatus").innerHTML = "There is  too much mass for the shuttle to take off"
         event.preventDefault();

      } else {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("launchStatus").style.color = "green"; 
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} Ready`
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot  ${copilotName.value} Ready`
         document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch"
         event.preventDefault();
      }

   });
});