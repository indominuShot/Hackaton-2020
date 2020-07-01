exports.up = (Knex) => {
    return Knex.schema.createTable('group-teachers', (table) => {
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
};

exports.down = (Knex) => {
    return Knex.schema.dropTable('group-teachers');
};
