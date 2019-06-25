const bcrypt = require('bcryptjs')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'noble@email.com', password: bcrypt.hashSync("password", 10), role: 'school', firstName: "Noble", lastName: "Obioma"},
        {id: 2, email: 'ramses@email.com', password: bcrypt.hashSync("password", 10), role: 'school', firstName: "Ramses", lastName: "Bermudez"},
      ]);
    });
};
