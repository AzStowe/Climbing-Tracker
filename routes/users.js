var router = require('express').Router();
var usersCtrl = require('../controllers/users');

router.get('/users', usersCtrl.index);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;