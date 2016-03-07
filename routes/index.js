var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

// GET Speakers page
router.get('/speakers',function(req,res){
  res.render('speakers',{title : 'Speakers'});
})

module.exports = router;
