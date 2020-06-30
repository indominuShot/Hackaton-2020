const Knex = require('knex');

module.exports = {
    up() {
        return Knex.schema.createTable('students', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.string('cpf').notNullable();
            table.string('age').notNullable();
        });
    },

    down() {
        return Knex.schema.dropTable('students');
    },
};
