const utils = require('./utils.js');
const saltRounds = 10;
const bcrypt = require('bcrypt');
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'hayden',
    password : 'a',
    database : 'fortifylicensing'
  }
});
var HandlerApi = function() {};

HandlerApi.prototype.signInUser = (email, password, password_confirmation) => {
  return new Promise(function(resolve, reject) {
    utils.checkIfUserAlreadyExists(email, knex, (response) => {
      if (response.length) {
        resolve({status: 0, message: "Email already exists"});
      } else if (password === password_confirmation) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            resolve({status: 0, message: "Error creating user"});
          }
          knex('users').insert({ email: email, password: hash})
          .then((response) => {
            if (response) {
              resolve({status: 1, message: "Account successfully created"});
            }
          });
        });
      } else {
        resolve({ status: 0, message: "Your passwords do not match" });
      }
    });
  });
}

module.exports = HandlerApi;
