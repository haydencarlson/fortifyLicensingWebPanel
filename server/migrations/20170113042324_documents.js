
exports.up = function(knex, Promise) {
	return knex.schema.createTable('documents', function(table) {
    table.increments();
    table.string('documentUrl');
    table.string('title');
    table.integer('subNavTabs_id').unsigned();
    table.foreign('subNavTabs_id').references('subNavTabs.id')
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('documents');	
};
