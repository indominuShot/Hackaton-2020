exports.up = (Knex) => {
    return Knex.schema.createTable('addresses', (table) => {
        table.increments('id').primary();
        table.string('street').notNullable();
        table.string('number').notNullable();
        table.string('cep').notNullable();
        table.string('neighborhood').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table
            .integer('school_id')
            .notNullable()
            .references('id')
            .inTable('schools');
    });
};

exports.down = (Knex) => {
    return Knex.schema.dropTable('addresses');
};
