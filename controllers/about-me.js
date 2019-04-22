var express = require('express');
var router = express.Router();

var tags = {
  title: "Daniel Ovadyah | About Me", 
  description: "Daniel Ovadyah is the founder and CEO of Ovaydah Group. He is a financial, marketing and technology professional with years of experience working in startups."
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about-me', { tags: tags });
});

module.exports = router;
