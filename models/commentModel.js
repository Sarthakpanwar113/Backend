//16.
//scheme likhne ke liye mongoose use karte the therefore
// Import Mongoose 
const mongoose = require('mongoose')

//17
// Route Handler create karo
const commentSchema = new mongoose.Schema({
    post:{
        //ager app kisi or object ko refer kar rahe hote ho uski id ke duyra then hum yeh use karte hai
        //post basically id ko store kar raha hoga
        type:mongoose.Schema.Types.ObjectId,
        ref : "Post", //reference to the post model
    },
    user: {
        type:String,
        required:true,
    },    
    body: {
        type:String,
        required:true,
    }    
})

//18
// Export 
//comment schema ko comment naam se export kar diya
module.exports = mongoose.model("Comment",commentSchema)