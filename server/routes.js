const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const utils = require('./utils.js');
const saltRounds = 10;
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'hayden',
    password : 'a',
    database : 'fortifylicensing'
  }
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

module.exports = router;
