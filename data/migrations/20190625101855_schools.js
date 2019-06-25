

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
            .integer('fundsNeeded', 128)
            .notNullable();
        schools
            .integer('currentFunds', 128)
        schools
            .string('schoolImg', 500)
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('schools');
};