var arrayofobj = [];
var dataObj;
const fs = require("fs");
let json = fs.readFileSync("clients.json")
const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let ProfileFileHTML = fs.readFileSync("../ClientSide/profile.html").toString()



app.use(express.static(path.join(__dirname, '../ClientSide/styles.css')));
function ahmed(urPath) {

    return path.join(__dirname, urPath);
}


app.get("/main.html", (req, res) => {
    res.sendFile(ahmed("../ClientSide/main.html"));


});

app.post("/profile.html", (req, res) => {
    console.log(req.body);
    ProfileFileHTML = ProfileFileHTML.replace("{userName}", req.body.name)
    ProfileFileHTML = ProfileFileHTML.replace("{email}", req.body.email)
    ProfileFileHTML = ProfileFileHTML.replace("{address}", req.body.address)
    ProfileFileHTML = ProfileFileHTML.replace("{phone}", req.body.phone)
    var stringjson = json.toString()
    var parsedjson = JSON.parse(stringjson)
    parsedjson.push(req.body)
    fs.writeFileSync("clients.json", JSON.stringify(parsedjson), () => { })
    res.send(ProfileFileHTML);
});


app.get("/styles.css", (req, res) => {

    res.sendFile(ahmed("../ClientSide/styles.css"));

});

app.get("/scripts.js", (req, res) => {

    res.sendFile(ahmed("../ClientSide/scripts.js"));
});

app.get("/clients.json", (req, res) => {


    res.sendFile(ahmed("/clients.json"));


});





app.listen("7005", () => { console.log("http://localhost:7005") })























