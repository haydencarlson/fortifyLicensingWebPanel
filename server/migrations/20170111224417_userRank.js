
exports.up = function(knex, Promise) {
	return knex.schema.createTable('userRanks', function(table) {
    table.increments();
    table.integer('rankLevel');
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('userRanks');	
};
