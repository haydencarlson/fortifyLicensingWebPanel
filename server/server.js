const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {'reconnection': true});
const socket_server = require('./sockets')(io);
  client: 'postgresql',
  connection: {
    host : 'localhost',
    user : 'hayden',
    password : 'a',
    database : 'fortifyLicensing',
    port: 5432,
    ssl: true
  }
});

server.listen(3000, (err) => {
  if (err) { console.log(err) };
  console.log("Fortify Licensing Server listening on port 3000");
});
