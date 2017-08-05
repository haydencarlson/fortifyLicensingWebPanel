const utils = require('./utils.js');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
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

HandlerApi.prototype.signUpUser = (email, password, passwordConfirmation, fullName) => {
  debugger;
  return new Promise(function(resolve, reject) {
    utils.checkIfUserAlreadyExists(email, knex, (response) => {
      if (response.length) {
        resolve({status: 0, message: "Email already exists"});
      } else if (password === passwordConfirmation) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            resolve({status: 0, message: "Error creating user"});
          }
          knex('users').insert({ email: email, password: hash, fullName: fullName})
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
};

HandlerApi.prototype.signJwt = (user) => {
  debugger;
  return new Promise((resolve, reject) => {
    debugger;
    let token = jwt.sign({
      uid: uid,
    }, process.env.JWT_SECRET, { expiresIn: '5h'});
    resolve({token});
  });
};

HandlerApi.prototype.newApplication = (name, description, url) => {
  return new Promise((resolve, reject) => {
  });
};


HandlerApi.prototype.decodeJwt = (token) => {

}
HandlerApi.prototype.verifyJwt = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        resolve({status: 0})
      } else {
        resolve({status: 1, data: decoded});
      }
    });
  });
};

HandlerApi.prototype.fetchUser = (uid) => {
  return new Promise(function(resolve, reject) {
    utils.fetchUser(uid, function(response) {
      resolve(response);
    });
  });
}

HandlerApi.prototype.signInUser = (email, password, API) => {
  return new Promise((resolve, reject) => {
    utils.checkIfUserAlreadyExists(email, knex, (response) => {
      if (response.length) {
        API.comparePassword(response, password).then((result) => {
          if (result) {
            API.signJwt(result).then((token) => {
              resolve({
                status: 1,
                message: "You have been signed in",
                token: token
              });
            });
          } else {
            resolve({status: 0, message: "Email or Password incorrect"});
          }
        });
      } else {
        resolve({status: 0, message: "User does not exist"});
      }
    })
  });
};

HandlerApi.prototype.comparePassword = (response, passwordInput) => {
  return new Promise((resolve, reject) => {
    let passwordHash = response[0].password;
    bcrypt.compare(passwordInput, passwordHash, (err, res) => {
      if (res) {
        resolve({user: response[0]});
      } else {
        resolve(false);
      }
    });

  });
};

module.exports = HandlerApi;
