var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    var data = {};
    if(req.method  === 'GET'){
        var path = url.parse(req.url, true);
        var d = new Date(path.query.iso);
        if(path.pathname === '/api/parsetime'){
            data.hour = d.getHours();
            data.minute = d.getMinutes();
            data.second = d.getSeconds();

        }else if (path.pathname === '/api/unixtime'){
            data.unixtime = d.getTime(); 
        }
        var pass = JSON.stringify(data);
        res.writeHead(200, { 'Content-Type': 'application/json' })  
        res.end(pass)
    }
});

server.listen(process.argv[2]);