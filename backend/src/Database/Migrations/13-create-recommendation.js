const Knex = require('knex');

module.exports = {
    up() {
        return Knex.schema.createTable('recommendation', (table) => {
            table.increments('id').primary();
            
            table
                .integer('idTeacher')
                .notNullable()
                .references('id')
                .inTable('teachers');

            table
                .integer('idBook')
                .notNullable()
                .references('id')
                .inTable('books');
        });
    },

    down() {
        return Knex.schema.dropTable('recommendation');
    },
};