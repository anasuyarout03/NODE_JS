let http = require('http');
let fs = require('fs');
let port = 8756;

let server = http.createServer(function(req,res){
    //readFile
    fs.readFile('db.json','utf-8',function(err,data){
        if(err) throw err;
        res.write(data);
        res.end()
    })
})

server.listen(port)