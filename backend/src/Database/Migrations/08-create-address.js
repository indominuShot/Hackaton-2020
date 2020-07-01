const Knex = require('knex');

module.exports = {
    up() {
        return Knex.schema.createTable('addresses', (table) => {
            table.increments('id').primary();
            table.string('street').notNullable();
            table.string('number').notNullable();
            table.string('cep').notNullable();
            table.string('neighborhood').notNullable();
            table.string('city').notNullable();
            table.string('uf', 2).notNullable();
            table
                .integer('school_id')
                .notNullable()
                .references('id')
                .inTable('schools');
        });
    },

    down() {
        return Knex.schema.dropTable('addresses');
    },
};
