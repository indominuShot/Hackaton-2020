const Knex = require('knex');

module.exports = {
    up() {
        return Knex.schema.createTable('reading', (table) => {
            table.increments('id').primary();
            
            table
                .integer('idStudent')
                .notNullable()
                .references('id')
                .inTable('students');

            table
                .integer('idBook')
                .notNullable()
                .references('id')
                .inTable('students');
        });
    },

    down() {
        return Knex.schema.dropTable('reading');
    },
};