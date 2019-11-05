exports.up = function(knex) {
	return knex.schema.createTable('cars', function(table) {
		table.increments();
		table.string('VIN', 255).notNullable();
		table.string('make', 64).notNullable();
		table.string('model', 128).notNullable();
		table.float('mileage').notNullable();
		table.string('transmission', 64);
		table.string('title status', 64);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('cars');
};
