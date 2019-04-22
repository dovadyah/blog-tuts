var express = require('express');
var path = require('path');
var Blog = require(path.join(__dirname, "../models/blogPost")).Blog;

//Find and extract blogs by id
module.exports = function(res, t, procedure = "findall", req){
    if(procedure == "findall"){
        Blog.find({}, (err, b) => {
            if(err) return handleError(err);                           //b is an array object 
            res.render("blogs", {
                tags: t,
                blog: b
            }); 
        })
    } else if(procedure == "findone"){
        Blog.findOne({ _id: req.params.id }, (err, b) => {
            if(err) return handleError(err);                           //b is an object returned by specific id
            res.render("showBlog", {
                tags: t,
                blog: b
            }); 
        })
    } else if(procedure == "create"){
        Blog.create(req.body.blog, (err) => {
            if(err) {
                res.render("blog-form");
                return handleError(err);
            }
        })
        res.redirect('/blog')
    } else if(procedure == "deleteOne") {
        Blog.deleteOne({ _id: req.params.id }, (err) => {
            if(err) return handleError(err);
            res.redirect("/blog");
        })
    } else if(procedure == "editOne"){
        Blog.findOne({ _id: req.params.id }, (err, b) => {
            if(err) return handleError(err);                           //b is an object returned by specific id
            res.render("blog-form", {
                tags: t,
                blog: b
            }); 
        })
    } else if (procedure == "update"){
        Blog.updateOne({ _id: req.params.id }, req.body.blog, (err) => {
            if(err) return handleError(err);
            res.redirect("/blog");
        });
    }
}

