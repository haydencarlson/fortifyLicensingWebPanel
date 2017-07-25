const express = require('express');
const router = express.Router();
const HandlerApi = require('./handlerApi.js');

router.all('/*', (req, res, next) => {
  var API = new HandlerApi();
  req.API = API;
  next();
});

router.post('/users', (req, res) => {
  req.API.signUpUser(
    req.body.email,
    req.body.password,
    req.body.password_confirmation
  ).then((result) => {
    res.send(result);
  });
});

router.post('/applications', (req, res) => {
  req.API.newApplication(
    req.body.name,
    req.body.description,
    req.body.url
  ).then((result) => {
    res.send(result);
  });
});

router.post('/auth/verify', (req, res) => {
  req.API.verifyJwt(
    req.body.jwt
  ).then((result) => {
    res.send(result);
  });
});

router.post('/auth', (req, res) => {
  debugger;
  req.API.signInUser(
    req.body.email,
    req.body.password,
    req.API
  ).then((result) => {
    debugger;
    res.send(result);
  });
});

module.exports = router;
