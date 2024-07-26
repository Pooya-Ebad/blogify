const {Schema, Types, model} = require("mongoose");

const BlogSchema = new Schema({
    title: {type: String, required: true},
    short_desc: {type: String, required: true},
    long_desc: {type: String, required: true},
    author: {type: Types.ObjectId, ref: "user", required: false},
}, {timestamps: true});

const blogModel = model('blog', BlogSchema);
module.exports = {
    blogModel
};