const http = require("http");
const currencies = require("./currencies.json")

const server= http.createServer((req,res)=>{

    const serverInfo = {
        serverName : "CodesandBox Server",
        version : "1.0.0",
        currentDate : new Date().toLocaleDateString(),
        currentTime : new Date().toLocaleTimeString(),
    }


    switch (req.url) {
        case "/status":
            res.writeHead(200,{"Content-Type": "application/json" })
            res.write(JSON.stringify(serverInfo))
            res.end();
            break;
        
        case "/currencies":
            res.writeHead(200,{"Content-Type": "application/json" })
            res.write(JSON.stringify(currencies))
            res.end();
            break;
    
        default: 
            res.writeHead(200,{"Content-Type": "text/html" })
            res.write(`<h1>Currency Database</h1>`)
            res.end();
            break;
    }
    
    
});



server.listen(8082,()=>{
    console.log("Listening...")
})