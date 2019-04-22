var express = require('express');

module.exports = (req, res, next) => {
    if(req.body && typeof req.body == "object" && '_method' in req.body){
      if(req.body._method == "DELETE"){
        req.method = "DELETE";
        req.url = req.path;
      } else if(req.body._method == "PUT"){
        req.method = "PUT";
        req.url = req.path;
      }
    }
    next()
}