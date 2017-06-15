var net = require('net')  

var server = net.createServer(function (socket) {  
    var d = new Date();
    function db(num){
        if(num < 10){
            return '0'+num;
        }
        return num;
    }
    var data = d.getFullYear() + '-' + db(d.getMonth() + 1) + '-' + db(d.getDate()) + " " + db(d.getHours()) + ":" + db(d.getMinutes()) + '\n';    
    socket.end(data);

})  
server.listen(process.argv[2]);  