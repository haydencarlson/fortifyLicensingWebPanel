
exports.up = function(knex, Promise) {
	return knex.schema.createTable('user_projects', function(table){
    table.increments('id');
    table.integer('user_id').references('users.id');
    table.integer('project_id').references('projects.id');
   })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('user_projects');	
};
