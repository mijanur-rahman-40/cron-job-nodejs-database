const express = require("express");
const router = express.Router();

const { getAllPosts, createPost } = require('../controllers/postController');

router.get("/getPosts", getAllPosts)
router.post("/newPost", createPost);

module.exports = router;

// SELECT * FROM users WHERE deleted_at <= CURDATE(); 
// SELECT * FROM users WHERE deleted_at <= NOW();