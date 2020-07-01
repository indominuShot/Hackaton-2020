exports.up = (Knex) => {
    return Knex.schema.createTable('schools', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('cnpj').notNullable();
        table.string('user').notNullable();
    });
};

exports.down = (Knex) => {
    return Knex.schema.dropTable('schools');
};
