const express = require("express");
const app = express();
const port = 3030;
const stratfordPharmacies = require("./data/Stratford.json");

// 
app.get("/", (request, response) => {
    response.send("Returning some value");

});



// PHARMACIES DIRECTORY
app.get("/stratford", (request, response) => {
  response.send(stratfordPharmacies);
});

app.listen(port, () => {
    console.log("App is listening on PORT:3030");

});


// Pharmacies function
function returnPharmacies() { 


}