const http = require("http");
const fs = require("fs");


var arrayofobj = [];
var dataObj;
let json = fs.readFileSync("clients.json")
//console.log(json)
let MainFileHTML = fs.readFileSync("../ClientSide/main.html")
let ProfileFileHTML = fs.readFileSync("../ClientSide/profile.html").toString()

let StyleCSS = fs.readFileSync("../ClientSide/style.css")
let ScriptFile = fs.readFileSync("../ClientSide/scripts.js")
let myIcon = fs.readFileSync("../ClientSide/favicon.ico");
//console.log(ScriptFile)

var userName = "";

http.createServer((req, res) => {
    console.log(req.url)
    //#region GET
    if (req.method == "GET") {
      //  console.log(req.url)
        switch (req.url) {
            case "/main.html":
               
                res.setHeader("Access-Control-Allow-Origin", "*");//MiddleWare ==> install ==> use
                //CORS[Front xxx Back]
                res.write(MainFileHTML);
                break;
            case "/profile.html":
                res.write(ProfileFileHTML);
                break;
            case "/style.css":
                res.writeHead(200, "Ok", { "content-type": "text/css" })
                res.write(StyleCSS)
                console.log("css")
                break;
            case "/scripts.js":
                res.writeHead(200, "Hii", { "content-type": "text/javascript" })
                res.write(ScriptFile)
                console.log("script")
                break;

            case "/favicon.ico":
                res.writeHead(200, "ok", { "content-type": "image/vnd.microsoft.icon" })
                res.write(myIcon)
                break;
                case '/clients.json':
                res.writeHead(200, "ok", { "content-type": "application/json" })
                    
                    res.write(json)
                    break;
            default:
                res.write("<h1>No Page Found</h1>")
                break;
        }
        res.end();
    }
    //#endregion
    //#region POST
    else if (req.method == "POST") {//url
        req.on("data", (data) => {
            var Alldata = []
            Alldata.push(data)
            // console.log(Alldata)
            var stringdata = Alldata.toString()
            const parsedData = new URLSearchParams(stringdata);
            console.log(parsedData)
            dataObj = {};

            for (var pair of parsedData.entries()) {
                dataObj[pair[0]] = pair[1];
            }

console.log(dataObj)



        })
        req.on("end", () => {


            ProfileFileHTML = ProfileFileHTML.replace("{userName}", dataObj.name)
            ProfileFileHTML = ProfileFileHTML.replace("{email}", dataObj.email)
            ProfileFileHTML = ProfileFileHTML.replace("{address}", dataObj.address)
            ProfileFileHTML = ProfileFileHTML.replace("{phone}", dataObj.phone)

            var stringjson = json.toString()
            var parsedjson = JSON.parse(stringjson)
          
            parsedjson.push(dataObj)
           
            fs.writeFileSync("clients.json", JSON.stringify(parsedjson), () => { })



            res.write(ProfileFileHTML)
            res.end();
        })
    }
    //#endregion



}).listen("7001", () => { console.log("http://localhost:7001") })
