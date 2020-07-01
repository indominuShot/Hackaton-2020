exports.up = (Knex) => {
    return Knex.schema.createTable('students', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('age').notNullable();
        table.string('user').notNullable();
    });
};

exports.down = (Knex) => {
    return Knex.schema.dropTable('students');
};
