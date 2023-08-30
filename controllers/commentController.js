//25
// import model of post and comment 
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");


const { response } = require("express");


//26.
// business Logic
exports.createComment = async (req, res) => {
    try {
        // fetch data from request body 
        const { post, user, body } = req.body;

        // create comment object
        const comment = new Comment({
            post, user, body
        })

        //create method bhi use kar sakte hai lakin save use karne se phale comment ka object bna hona chahiye
        // save the new comment object into the db 
        const savedComment = await comment.save();

        //copy mein logic likha hai 
        //is post pe iss user ne new comment kiya toh post ke ander phale post find kiya abb iss post ke ander title hai body hai likes hai and comments hai toh comment ko update karna hai id create karne hai
        // Find the Post By Id and the new comment to its comment array 
        //$push ek update karne ke liye use or $pull delete karne ke liye
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } },
            //iska mtlb ki ager yeh sb kaam hone ke baad updated document return karna purani mt karna
            { new: true })
            //abhi comments ki id padi hai mujha acutal document chahiye toh yeh use karte hai
            .populate("comments") //Populates the comment array with the comments document
            .exec();

        res.json({
            post: updatedPost,
        })
    }
    catch (err) {
        return res.status(500).json({
            error : "Error while creating comment",            
        })
    }
}