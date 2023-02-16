var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', function(req, res, next) {
  res.render('users', { title: 'User List' });
});
router.get('/users/detail', function(req, res, next) {
  res.send('user details',{title: "Detail List"});
});

module.exports = router;
