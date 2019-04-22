var express = require('express');
var router = express.Router();
var path = require('path')
var proceduresBlog = require(__dirname + "/proceduresBlogDB");

var tags = {
    title: "Daniel Ovadyah | Blogs", 
    description: "List of all blogs written by Daniel Ovadyah."
}

//Get all Blogs
router.route('/')
    .get((req, res) => {
        proceduresBlog(res, tags); 
    })
    .post((req, res) => {
        proceduresBlog(res, tags, "create", req)
    });

router.route('/new')
    .get((req, res) => {
        res.render("blog-writer", {tags: tags});
    });

router.route('/:id/edit')
    .get((req, res) => {
        proceduresBlog(res, tags, "editOne", req);
    });    

//Post Blog
router.route('/:id')
    .get((req, res) => {
        proceduresBlog(res, tags, "findone", req);
    })
    .put((req, res) => {
        proceduresBlog(res, tags, "update", req);
    })
    .delete((req, res) => {
        proceduresBlog(res, tags, "deleteOne", req);
    });

module.exports = router;