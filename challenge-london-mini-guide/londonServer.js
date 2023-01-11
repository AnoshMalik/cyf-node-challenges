const express = require("express");
const app = express();
const port = 3030;
const stratfordObject = require("./data/Stratford.json");
const heathrowObject = require("./data/Heathrow.json");
const harrowObject = require("./data/Harrow.json");

// 
app.get("/", (request, response) => {
    response.send("Returning no specific value. CHANGE ROUTE");
    

});

// PHARMACIES DIRECTORY
app.get("/:city/pharmacies/", (request, response) => {
  // response.send(returnPharmacies(stratfordObject));

  if (request.params.city == "stratford") {
    response.send(returnPharmacies(stratfordObject));
  } else if (request.params.city == "heathrow") {
    response.send(returnPharmacies(heathrowObject));
  } else if (request.params.city == "harrow") {
    response.send(returnPharmacies(harrowObject));
  } else {
   response.send("PATH NOT FOUND");
  }
});

// COLLEGES DIRECTORY
app.get("/:city/colleges", (request, response) => {
 if (request.params.city == "stratford") {
   response.send(returnColleges(stratfordObject));
 } else if (request.params.city == "heathrow") {
   response.send(returnColleges(heathrowObject));
 } else if (request.params.city == "harrow") {
   response.send(returnColleges(harrowObject));
 } else {
   response.send("PATH NOT FOUND");
 }});

// DOCTORS DIRECTORY
app.get("/:city/doctors", (request, response) => {
 if (request.params.city == "stratford") {
   response.send(returnDoctors(stratfordObject));
 } else if (request.params.city == "heathrow") {
   response.send(returnDoctors(heathrowObject));
 } else if (request.params.city == "harrow") {
   response.send(returnDoctors(harrowObject));
 } else {
   response.send("PATH NOT FOUND");
 }});

// HOSPITALS DIRECTORY
app.get(`/:city/hospitals`, (request, response) => {
 if (request.params.city == "stratford") {
   response.send(returnHospitals(stratfordObject));
 } else if (request.params.city == "heathrow") {
   response.send(returnHospitals(heathrowObject));
 } else if (request.params.city == "harrow") {
   response.send(returnHospitals(harrowObject));
 } else {
   response.send("PATH NOT FOUND");
 }});


app.listen(port, () => {
    console.log("App is listening on PORT:3030");

});


// Pharmacies function
function returnPharmacies(object) {
    return object["pharmacies"];
}


// Colleges function
function returnColleges(object) {
    return object["colleges"];
}

// Doctors function
function returnDoctors(object) {
    return object["doctors"];
}

// hospital function
function returnHospitals(object) {
    return object["hospitals"];
}