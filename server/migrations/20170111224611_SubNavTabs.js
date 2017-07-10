
exports.up = function(knex, Promise) {
	return knex.schema.createTable('subNavTabs', function(table) {
    table.increments();
    table.string('tabName');
    table.integer('mainNavTab_id').unsigned();
    table.foreign('mainNavTab_id').references('mainNavTabs.id');
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('subNavTabs');	
};
