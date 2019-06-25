

exports.up = function (knex) {
    return knex.schema.createTable('schools', schools => {
        schools.increments();
        schools
            .integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')

        schools
            .string('schoolName', 255)
            .notNullable()
        schools
            .string('location', 500)
            .notNullable();
        schools
            .string('email', 128)
        schools
            .integer('phoneNumber', 128)
        schools
            .integer('fundsNeeded')
            .notNullable();
        schools
            .integer('currentFunds')
        schools
            .string('schoolImg', 5000)
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('schools');
};