
//14.
//ager route create karna hai toh sbse phale route le kar aoo
//usse phale express ka instace le kar ana hoga
const express = require('express');
const router = express.Router();


//15.
// Import Controller 
//post, comment and like se interact karna hai toh theen controller bna diye
//abb controller bna do or import karva do 
const {createComment} = require("../controllers/commentController");
const {createPost,getAllPosts} = require("../controllers/postController");
const {likePost,unlikePost} = require("../controllers/likeController");


//
// Mapping Create
router.post("/comments/create",createComment)
router.post("/posts/create",createPost)
router.get("/posts",getAllPosts)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)

//
// Export Controller
module.exports = router;