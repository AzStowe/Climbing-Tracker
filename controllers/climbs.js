// const User = require('../models/user');
const Climb = require('../models/climb');

module.exports = {
  index,
  newClimb,
  show,
  create
};

function newClimb(req, res) {
  res.render('climbs/new');
}

function create(req, res) {
  var climb = new Climb(req.body);
  console.log(climb);
  climb.save(function(err) {
      // one way to handle errors
      if (err) return res.send(err);
      // if (err) return res.render('users/new');
      // for now, redirect right back to new.ejs
      res.redirect('/climbs');
  });
}

function show(req, res) {
  res.render('/climbs/show');
}

function index(req, res, next) {
  Climb.find({}, function(err, climbs) {
    res.render('climbs/index', {
      user: req.user, climbs
    })
  })
}