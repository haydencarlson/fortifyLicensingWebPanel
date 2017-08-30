var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'hayden',
    password : 'a',
    database : 'fortifylicensing'
  }
});
function checkIfUserAlreadyExists(email, knex, callback) {
  debugger;
  knex('users').where({email: email})
    .then((response) => {
      callback(response);
    });
}

function fetchUser(uid, callback) {
  debugger;
  knex('users').where({id: uid})
    .then((response) => {
      callback(response);
    })
}

module.exports = { checkIfUserAlreadyExists, fetchUser };
