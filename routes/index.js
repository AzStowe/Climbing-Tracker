var router = require('express').Router();
var passport = require('passport');

// The root route renders our view
router.get('/', function(req, res) {
  res.render('index', {user: req.user});
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/climbs',
    failureRedirect : '/'
  }
));
//	https://thawing-badlands-45784.herokuapp.com/oauth2callback

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



module.exports = router;
