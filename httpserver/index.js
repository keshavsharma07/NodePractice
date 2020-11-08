const http =require("http");

const server =http.createServer((req,res) =>{
    if(req.url == "/"){
        res.end( "hello from the other side");
    }
    else if(req.url == "/about"){ 
        res.end( "hello from the about side");
    }
    else if(req.url == "/contact"){
        res.end( "hello from the contact side");
    }
    else{

        res.end("404");
    }
});

server.listen(8000,"127.0.0.1" ,() =>{
 console.log("Listeninng ")
});