const express = require('express');
const router = express.Router();
const HandlerApi = require('./handlerApi.js');

router.all('/*', (req, res, next) => {
  var API = new HandlerApi();
  req.API = API;
  next();
});

router.post('/users', (req, res) => {
  req.API.signInUser(
    req.body.email,
    req.body.password,
    req.body.password_confirmation
  ).then((result) => {
    res.send(result);
  });
});

module.exports = router;
