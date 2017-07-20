
exports.up = function(knex, Promise) {
  return knex.schema.createTable('licenses', (t) => {
    t.increments('id');
    t.string('activation_key');
    t.integer('user_id').unsigned().index().references('id').inTable('users');
    t.integer('owner_user_id').unsigned().index().references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('licenses');

};
