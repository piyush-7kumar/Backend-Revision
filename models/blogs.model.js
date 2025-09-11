const mongoose = require("mongoose");
const validator = require("validator")

const authorSchema = new mongoose.Schema({
    fullName : {type:String, maxlength : 25},
    email:{type:String, required: true, maxlength: 50,validate:(value)=>validator.isEmail(value)},
    image:{type:String, validate: (value) => validator.isURL(value) },
},{_id:false})




const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    authors: { type: [authorSchema] },
    content: { type: String, default: "" },
    publishedAt: { type: String, default: null },
},
{ timestamps: true }
);

const blogModel = mongoose.model("blog",blogSchema);



module.exports = blogModel