
function checkIfUserAlreadyExists(email, knex, callback) {
  knex('users').where({email: email})
    .then((response) => {
      callback(response);
    });
}

module.exports = { checkIfUserAlreadyExists };
