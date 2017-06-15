var http = require('http');

var server = http.createServer(function(req,res){
    if(req.method  === 'POST'){
        var data = '';
        req.on('data', function(d) {
            data += d;
        });
        req.on('end', function() {
            res.end(data.toUpperCase());
        });
    }
});

server.listen(process.argv[2]);

    //  inStream.pipe(map(function (chunk) {  
    //    return chunk.toString().split('').reverse().join('')  
    //  })).pipe(outStream)  
