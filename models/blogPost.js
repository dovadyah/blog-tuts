var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    image: String,
    comments:{
        body: String,
        author: String,
        date: Date
    },
    date: {
        type: Date,
        default: Date.now
    }
})

var Blog = mongoose.model("Blog", blogSchema);

module.exports = {
    Blog: Blog
}