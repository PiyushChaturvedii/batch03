var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shree Ram' });
});

router.get('/student/:id/course/:cid', function (req, res, next) {
  res.render('student', {result: req.params});
  // res.json(req.params)
});  

router.post('/student/submit',function (req,res,next){
  var id = req.body.std;
  var cid = req.body.cou;
  res.redirect('/student/' + id + '/course/' + cid);
})  


module.exports = router;
