const io = require('socket.io');
const server = io.listen(8080);

let sequenceNumberByClient = new Map();
let clients = [];

server.on("connection", socket => {
  socket.on('data', data => {
    if (data.type ==  'request') {
      clients.forEach(client => {
        client.emit('response', data);
      });
      console.log(data);

    } else {
      clients.push(socket);
    }

  });

  socket.on("disconnect", () => {
      console.info(`Client gone [id=${socket.id}]`);
      clients = clients.filter(c => c.id != socket.id);
  });

});
