exports.up = (Knex) => {
    return Knex.schema.createTable('teachers', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('cpf').notNullable();
        table.string('age').notNullable();
    });
};

exports.down = (Knex) => {
    return Knex.schema.dropTable('teachers');
};
