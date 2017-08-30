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

HandlerApi.prototype.signUpUser = (email, password, passwordConfirmation, fullName, API) => {
  return new Promise(function(resolve, reject) {

    utils.checkIfUserAlreadyExists(email, knex, (response) => {
      if (response.length) {
        resolve({status: 0, message: "Email already exists"});
      } else if (password === passwordConfirmation) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            resolve({status: 0, message: "Error creating user"});
          }
          knex('users')
          .returning(['fullName', 'email', 'id'])
          .insert({ email: email, password: hash, fullName: fullName})
          .then((response) => {
            API.signJwt(response[0]).then(function(data) {
              resolve({
                status: 1,
                message: "You have been signed in",
                token: data.token,
                user: data.user
              });
            });
          });
        });
      } else {
        resolve({ status: 0, message: "Your passwords do not match" });
      }
    });
  });
};

HandlerApi.prototype.signJwt = (user) => {
  return new Promise((resolve, reject) => {
    let token = jwt.sign({
      uid: user.user.id,
      email: user.user.email,
      fullName: user.user.fullName
    }, process.env.JWT_SECRET, { expiresIn: '5h'});
    resolve({token, user: user.user});
  });
};

HandlerApi.prototype.newApplication = (name, description, url) => {
  return new Promise((resolve, reject) => {
    if (name, description, url) {
      knex('applications').insert({name, description, url}).then(function(response, err) {
        if (err) {
          resolve(false);
        }
        if (response) {
          resolve(true);
        }
      })
    }
  });
};

HandlerApi.prototype.fetchApplications = (user_id, auth_token) => {
  return new Promise((resolve, reject) => {
    knex.select()
      .table('applications')
      // WHERE USER_ID IS USER_ID
      .then(function(response) {

        resolve(response);
    });
  });
};

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
                token: token.token,
                user: { user: token.user}
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
