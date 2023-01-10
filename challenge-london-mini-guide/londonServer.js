const express = require("express");
const app = express();
const port = 3030;


app.get("/", (request, response) => {
    response.send("Returning some value");

});


app.listen(port, () => {
    console.log("App is listening on PORT:3030");

});