
exports.up = function(knex, Promise) {
  return knex.schema.createTable('applications', (t) => {
    t.increments('id');
    t.string('name');
    t.string('description');
    t.boolean('premium');
    t.string('url');
    t.integer('user_id').unsigned().index().references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('applications');
};
