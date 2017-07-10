
exports.up = function(knex, Promise) {
	return knex.schema.createTable('mainNavTabs', function(table) {
    table.increments();
    table.string('tabName');
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('mainNavTabs');	
};
