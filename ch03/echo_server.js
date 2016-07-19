/**
 * Created by es-mac on 15. 10. 28..
 */
var net = require('net');

var server = net.createServer(function(socket) {
   socket.on('data', function(data) {
        socket.write(data);
        console.log("DTAA recevied", data);
   });
});

server.listen(8000);