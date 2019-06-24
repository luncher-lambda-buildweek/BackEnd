const bcrypt = require('bcryptjs')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'noble@email.com', password: bcrypt.hashSync("password", 10), roles: 'school'},
        {email: 'ramses@email.com', password: bcrypt.hashSync("password", 10), roles: 'school'},
      ]);
    });
};