exports.up = (Knex) => {
    return Knex.schema.createTable('recommendation', (table) => {
        table.increments('id').primary();

        table
            .integer('teacher_id')
            .notNullable()
            .references('id')
            .inTable('teachers');

        table
            .integer('book_id')
            .notNullable()
            .references('id')
            .inTable('books');
    });
};

exports.down = (Knex) => {
    return Knex.schema.dropTable('recommendation');
};
