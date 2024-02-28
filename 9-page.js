const http = require("http");

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.end("This is the Home page")
    }
    else if(req.url === "/about"){
        res.end("This is the landing page");
    }
    else{
        res.end(
            `<h1>Oops</h1>
            <p>You have enter a wrong url address</p>
            <a href="/">Back home</a>
            `
        )
    }
})
server.listen(5000)