const Knex = require('knex');

module.exports = {
    up() {
        return Knex.schema.createTable('groups', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
        });
    },

    down() {
        return Knex.schema.dropTable('groups');
    },
};
