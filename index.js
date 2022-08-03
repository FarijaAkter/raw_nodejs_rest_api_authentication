/*
Title: UPTIME MONITORING APPLICATION
Description: A restful Api to Monitor Up/Down Time of user defined links
Date:03/08/2022
*/

//dependencies
const http = require("http")
const url = require('url')

//App object module scaffolding 
const app = {};
//Configuration
app.config = {
    port: 3000
};
//Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    //Server call $ listen
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`)
    });
}
//Handle req,res 
app.handleReqRes = (req, res) => {
    //Request handle
    //Get the url and parse it
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;

    console.log(queryStringObject)
    console.log(trimmedPath);
    //Response handle
    res.end("Hello World");
}

//Start the server 
app.createServer();
