var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/aboutus', function (req, res, next) {
  res.render('ram', { title: 'AboutUs' });
});


module.exports = router;
