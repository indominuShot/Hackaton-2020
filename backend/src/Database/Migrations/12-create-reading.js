exports.up = (Knex) => {
    return Knex.schema.createTable('reads', (table) => {
        table.increments('id').primary();

        table
            .integer('student_id')
            .notNullable()
            .references('id')
            .inTable('students');

        table
            .integer('book_id')
            .notNullable()
            .references('id')
            .inTable('books');
    });
};

exports.down = (Knex) => {
    return Knex.schema.dropTable('reads');
};
