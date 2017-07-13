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

  utils.checkIfUserAlreadyExists(req.body.email, knex, (response) => {
    if (response.length) {
      res.send({status: 0, message: "Email already exists"});
    } else if (req.body.password === req.body.password_confirmation) {
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) {
          res.send({status: 0, message: "Error creating user"});
        }
        knex('users').insert({ email: req.body.email, password: hash})
        .then((response) => {
          if (response) {
            res.send({status: 1, message: "Account successfully created"});
          }
        });
      });
    } else {
      res.send({status: 0, message: "Your passwords do not match"});
    }
  });
});

module.exports = router;
