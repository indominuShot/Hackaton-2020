const Knex = require('knex');

module.exports = {
    up() {
        return Knex.schema.createTable('books', (table) => {
            table.increments('id').primary();
            table.string('titulo').notNullable();
            table.string('sinopse').notNullable();
            table.string('category').notNullable();
            table.string('genre').notNullable();

            table
                .integer('idAuthor')
                .notNullable()
                .references('id')
                .inTable('bookAuthors');

            table
                .integer('idPublisher')
                .notNullable()
                .references('id')
                .inTable('bookPublishers');
        });
    },

    down() {
        return Knex.schema.dropTable('books');
    },
};