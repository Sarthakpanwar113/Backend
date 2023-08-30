//19.
//scheme likhne ke liye mongoose use karte the therefore
// Import Mongoose 
const mongoose = require('mongoose')

//20.
// Route Handler create kardo
const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Post" //reference to the post model at 24.
    },
    user: {
        type:String,
        required:true,
    },    
})

//21.
//like schema ko Like naam se export kar diya
// Export 
module.exports = mongoose.model("Like",likeSchema)