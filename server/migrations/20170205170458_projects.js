
exports.up = function(knex, Promise) {
	return knex.schema.createTable('projects', function(table) {
    table.increments('id');
    table.string('project_name');
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('projects');	
};
