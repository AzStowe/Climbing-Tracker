var router = require('express').Router();
var passport = require('passport');
var usersCtrl = require('../controllers/users');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users');
});

router.get('/new', usersCtrl.newClimb);








router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users',
    failureRedirect : '/users'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});

module.exports = router;
