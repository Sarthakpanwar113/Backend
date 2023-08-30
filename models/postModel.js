//22.
//scheme likhne ke liye mongoose use karte the therefore
// Import Mongoose 
const mongoose = require('mongoose')

//23.
// Route Handler 
const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    } ,
    body : {
        type : String,
        required : true
    } ,
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like",
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment",
    }]
})

//24.
// Export 
module.exports = mongoose.model("Post",postSchema)