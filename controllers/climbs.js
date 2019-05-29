// const User = require('../models/user');
const Climb = require('../models/climb');

module.exports = {
  index,
  newClimb,
  show,
  create,
  deleteClimb
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
  Climb.findById(req.params.id, function (err, climb) {
    if (err) return res.send(err);
    // Ticket.find({flight: flight._id}, function(err2, tickets) {
    //   if (err2) {
    //     res.send(error)
    //   }
      res.render('climbs/show', {climb});
    })
  };

  function deleteClimb(req ,res) {
    Climb.findByIdAndDelete(req.params.id, function(err, climb){
      if (err) return res.redirect('/climbs');
        console.log(climb);
      res.redirect('/climbs');
    });
  }


function index(req, res, next) {
  Climb.find({}, function(err, climbs) {
    res.render('climbs/index', {
      user: req.user, climbs
    })
  })
}