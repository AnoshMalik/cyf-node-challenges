const express = require("express");
const app = express();
const port = 3030;
const stratfordObject = require("./data/Stratford.json");

// 
app.get("/", (request, response) => {
    response.send("Returning no specific value. CHANGE ROUTE");

});

// PHARMACIES DIRECTORY
app.get("/pharmacies", (request, response) => {
  response.send(returnPharmacies(stratfordObject));
});

app.get("/colleges", (request, response) => {
  response.send(returnColleges(stratfordObject));
});

app.get("/doctors", (request, response) => {
  response.send(returnDoctors(stratfordObject));
});

app.get("/hospitals", (request, response) => {
  response.send(returnHospitals(stratfordObject));
});


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