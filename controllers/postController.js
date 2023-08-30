//27.
const Post = require("../models/postModel")


//28.
exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({title, body });
        //db mein save  
        const savedPost = await post.save();

        res.json({
            post : savedPost
        })
    }
    catch(err){
        return res.status(400).json({
            error : "Error While Creatisadasang Post ok bhai"
        })
    }
}

exports.getAllPosts = async (req, res) => {
    try{
        // const posts = await Post.find();
        //ager find tk likhte hai toh bss id ayegi ager sara chahiye toh populate and exec use karna hoga
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            data : posts,
        })
    }
    catch(err)
    {
        return res.status(400).json({
            error : "Error while Fetching qwqwwPost "
        })
    }
}