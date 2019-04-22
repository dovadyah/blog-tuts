var express = require('express');
var router = express.Router();

var tags = {
  title: "Daniel Ovadyah | Home", 
  description: "A website written by Daniel Ovadyah."
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { tags: tags });
});

module.exports = router;
