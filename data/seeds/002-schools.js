

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        {user_id: 1, schoolName: 'Southgate Middle School', location: 'Las Vegas, Nevada', fundsNeeded: 5000, currentFunds: 0, schoolImg: 'https://images.pexels.com/photos/263399/pexels-photo-263399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg'},
        {user_id: 2, schoolName: 'Mason-Rice Elementary', location: 'Newton Centre, Massachusetts', fundsNeeded: 600, currentFunds: 0, schoolImg: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg'},
        {user_id: 1, schoolName: 'Little Harbor Elementary School', location: 'Portsmouth, New Hampshire', fundsNeeded: 400, currentFunds: 0, schoolImg: 'https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg'},
        {user_id: 2, schoolName: 'Frost Elementary', location: 'Frostburg, Maryland', fundsNeeded: 1000,  currentFunds: 0, schoolImg: 'https://images.pexels.com/photos/207697/pexels-photo-207697.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg'},
        {user_id: 1, schoolName: 'Marion Cross School', location: 'Norwich, Vermont', fundsNeeded: 550,  currentFunds: 0, schoolImg: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg'},
        {user_id: 2, schoolName: 'Merion Middle School', location: 'Merion, Pennsylvania', fundsNeeded: 200,  currentFunds: 0, schoolImg: 'https://images.pexels.com/photos/357271/pexels-photo-357271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg'},
        {user_id: 1, schoolName: 'Hawk Ridge Middle School', location: 'Charlotte, North Carolina', fundsNeeded: 300,  currentFunds: 0, schoolImg: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg'},
        {user_id: 2, schoolName: 'Crawford Elementary School', location: 'Fairbanks, Alaska', fundsNeeded: 900,  currentFunds: 0, schoolImg: 'https://images.pexels.com/photos/373488/pexels-photo-373488.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg'}
      ]);
    });
};

