const Knex = require('knex');

module.exports = {
    up() {
        return Knex.schema.createTable('bookPublishers', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
        });
    },

    down() {
        return Knex.schema.dropTable('bookPublishers');
    },
};