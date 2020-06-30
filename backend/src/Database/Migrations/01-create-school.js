const Knex = require('knex');

module.exports = {
    up() {
        return Knex.schema.createTable('schools', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.string('cnpj').notNullable();
        });
    },

    down() {
        return Knex.schema.dropTable('schools');
    },
};
