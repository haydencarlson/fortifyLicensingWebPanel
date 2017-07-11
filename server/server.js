const app = require('express')();
const server = require('http').Server(app);


server.listen(3000, (err) => {
  if (err) { console.log(err) };
  console.log("Fortify Licensing Server listening on port 3000");
});
