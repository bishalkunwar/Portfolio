//JS Program to perform reading html file and rendering it over express browser. #By Bishal 

const express = require("express");
const app = express();
const fileStream = require("fs");

app.get("/", (req, res) => {
    let readStream = fileStream.createReadStream(__dirname + "/index.html");
    readStream.pipe(res);
    readStream.on("error", (err) => {
        console.log("Error while reading file");
    });
});

app.listen(3000, () => {
    console.log("App running fine on port 3000");
});