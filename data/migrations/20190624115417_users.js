
exports.up = function (knex) {
    return knex.schema.createTable('users', users => {
        users.increments();

        users
            .string('email', 50)
            .notNullable()
            .unique();
        users
            .string('password', 128)
            .notNullable();
        users
            .string('roles', 128)
            .notNullable()
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};