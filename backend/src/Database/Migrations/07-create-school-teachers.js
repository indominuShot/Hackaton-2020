exports.up = (Knex) => {
    return Knex.schema.createTable('school-teachers', (table) => {
        table.increments('id').primary();
        table
            .integer('school_id')
            .notNullable()
            .references('id')
            .inTable('schools');

        table
            .integer('teacher_id')
            .notNullable()
            .references('id')
            .inTable('teachers');
    });
};

exports.down = (Knex) => {
    return Knex.schema.dropTable('school-teachers');
};
