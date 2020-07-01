exports.up = (Knex) => {
    return Knex.schema.createTable('books', (table) => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.text('sinopse').notNullable();
        table.string('category').notNullable();
        table.string('genre').notNullable();
        table.string('author').notNullable();
        table.string('publisher').notNullable();
        table.date('publishDate').notNullable();
    });
};

exports.down = (Knex) => {
    return Knex.schema.dropTable('books');
};
