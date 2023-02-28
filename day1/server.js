var fs=require("fs")
const { write } = require("fs");
const http = require("http");
http.createServer((req, res) => {
    if (req.url != "/favicon.ico") {

        var index = req.url.split("/")
        console.log(index)
        var operation = index.at(1)
        console.log(operation)
        switch (operation) {

            case "add": var sum = 0;
                for (var i = 2; i < index.length; i++) {
                    var sum = sum + Number(index.at(i))
                    
                }
                fs.appendFile("result.txt",`\nsum of ur nums =${sum}`,()=>{})
                res.write(`<h1>sum of ur nums =${sum}</h2>`)
                break;
            case "sub": var result=index.at(2)
                for (var i = 3; i < index.length; i++) {
                    var result =result- Number(index.at(i))
                }
                fs.appendFile("result.txt",`\nsub of ur nums =${result}`,()=>{})
                res.write(`<h1>sub of ur nums =${result}</h2>`)
                break;
                
                case "div": var result=index.at(2)
                for (var i = 3; i < index.length; i++) {
                    var result =result/ Number(index.at(i))
                }
                fs.appendFile("result.txt",`\ndivisionof ur nums =${result}`,()=>{})

                res.write(`<h1>div of ur nums =${result}</h2>`)
                break;
                case "multi": var result=index.at(2)
                for (var i = 3; i < index.length; i++) {
                    var result =result* Number(index.at(i))
                }
                fs.appendFile("result.txt",`\nmultiplication of ur nums =${result}`,()=>{})

                res.write(`<h1>multiplication of ur nums =${result}</h2>`)
                break;





        }


        console.log(req.url)
        console.log(req.method)
        console.log(req.statusCode)
    }
    // res.writeHead(200,{"content-type":"text/plain"})
    // res.write(`<h1>o</h2>`)


    res.end()



})
    .listen("8000", () => console.log("connected to server 8000"))