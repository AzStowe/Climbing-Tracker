const User = require('../models/user');
const Climb = require('../models/climb');

module.exports = {
  index,
  newClimb,
  show
};

function newClimb(req, res) {
  res.render('users/new');
}

function show(req, res) {
  res.render('/users/show');
}

function index(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('users/index', { users,
      name: req.query.name, 
      sortKey,
      user: req.user
     });
  });
}