exports.up = (Knex) => {
    return Knex.schema.createTable('groups', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
    });
};

exports.down = (Knex) => {
    return Knex.schema.dropTable('groups');
};
