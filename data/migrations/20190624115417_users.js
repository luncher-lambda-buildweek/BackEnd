
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
            .string('role', 128)
        users
            .string('firstName', 128)
        users
            .string('lastName', 128)
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};