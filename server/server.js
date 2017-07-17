const app = require('express')();
const server = require('http').Server(app);
const router = require('./routes.js');
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Signature, X-Data');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

server.listen(3000, (err) => {
  if (err) { console.log(err) };
  console.log("Fortify Licensing Server listening on port 3000");
});
