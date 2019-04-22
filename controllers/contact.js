var express = require('express');
var router = express.Router();

var tags = {
  title: "Daniel Ovadyah | Contact", 
  description: "Contact | Daniel Ovadyah is the founder and CEO of Ovaydah Group. He is a financial, marketing and technology professional with years of experience working in startups."
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { tags: tags });
});

module.exports = router;