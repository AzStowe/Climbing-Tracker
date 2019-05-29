var router = require('express').Router();
var climbsCtrl = require('../controllers/climbs');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.redirect('/climbs');
// });

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
//renders the show page
router.get('/', isLoggedIn, climbsCtrl.index);
//redirects to /climbs
router.get('/new', isLoggedIn, climbsCtrl.newClimb);
//redirects to /climbs
router.post('/update/:id', isLoggedIn, climbsCtrl.updateClimb)
//render the show ejs
router.get('/:id', isLoggedIn, climbsCtrl.show);
//redirects to /climbs
router.post('/create', isLoggedIn, climbsCtrl.create);
//redirects to climbs
router.delete('/:id', isLoggedIn, climbsCtrl.deleteClimb);




module.exports = router;
