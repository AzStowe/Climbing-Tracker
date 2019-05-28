var router = require('express').Router();
var climbsCtrl = require('../controllers/climbs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/climbs');
});


router.get('/climbs', climbsCtrl.index);
router.get('/climbs/new', climbsCtrl.newClimb);
router.post('/climbs', climbsCtrl.create);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
