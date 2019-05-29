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
  console.log('anything');
  res.render('climbs/new', {user: req.user});
}

function create(req, res) {
  var climb = new Climb(req.body);
  console.log(climb);
  climb.save(function(err) {
      // one way to handle errors
      if (err) return res.send(err);
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
      res.render('climbs/show', {user: req.user, climb});
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