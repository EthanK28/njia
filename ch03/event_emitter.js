/**
 * Created by es-mac on 15. 10. 28..
 */

var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', function(id, client) {
    this.clients[id] = client;
    console.log("Joined: ", id, client);
    this.subscriptions[id] = function(senderId, message) {
        if (id != senderId) {
            this.clients[id].write(message);
        }
    }
});

channel.on("random", () => {
    console.log("random called");
});

channel.on('shutdown', () => {
    console.log("Shutdown emitted");
    channel.emit('broadcast', '', "Chat has shut down.\n");
    channel.removeAllListeners('broadcast');
});

var server = net.createServer((client) => {
    var id = client.remoteAddress + ':' + client.remotePort;
    console.log("ID:", id);
    console.log("client: ", client);

    client.on('end', () => {
        console.log('client disconnected');
    });

    
    channel.emit('join', id, client);
    
    debugger;

    client.on('connecting', (options) => {
        console.log("connecting ", options);
    });

    client.on('data', function(data) {
        data = data.toString();
        if (data.includes("shutdown")) {
            console.log("inside shutdown if");
            channel.emit('shutdown');
        }

        channel.emit("random");
        console.log("equals on shutdown", data.includes("shutdown"))
        console.log("data: ", data);
        channel.emit('broadcast', id, data);
    });
}).on("connection", (socket) => {
    socket.on("connect", (options) => {
        console.log("connected");
    });
});

server.listen(8888);
