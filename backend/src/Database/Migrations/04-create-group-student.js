const Knex = require('knex');

module.exports = {
    up() {
        return Knex.schema.createTable('group-students', (table) => {
            table.increments('id').primary();
            table
                .integer('group_id')
                .notNullable()
                .references('id')
                .inTable('groups');

            table
                .integer('teacher_id')
                .notNullable()
                .references('id')
                .inTable('teachers');
        });
    },

    down() {
        return Knex.schema.dropTable('group-students');
    },
};
