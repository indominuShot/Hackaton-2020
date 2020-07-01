const Knex = require('knex');

module.exports = {
    up() {
        return Knex.schema.createTable('bookAuthors', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('email').notNullable();
        });
    },

    down() {
        return Knex.schema.dropTable('bookAuthors');
    },
};