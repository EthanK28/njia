/**
 * Created by es-mac on 15. 10. 28..
 */

var net = require('net');

var server = net.createServer(function(socket) {
    socket.once ('data', function(data) {
        socket.write(data);
    });
});

server.listen(8888);
