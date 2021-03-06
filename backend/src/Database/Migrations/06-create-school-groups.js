exports.up = (Knex) => {
    return Knex.schema.createTable('school-groups', (table) => {
        table.increments('id').primary();
        table
            .integer('school_id')
            .notNullable()
            .references('id')
            .inTable('schools');

        table
            .integer('group_id')
            .notNullable()
            .references('id')
            .inTable('groups');
    });
};

exports.down = (Knex) => {
    return Knex.schema.dropTable('school-groups');
};
