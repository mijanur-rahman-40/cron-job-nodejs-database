const express = require("express");
const router = express.Router();

const { createPost } = require('../controllers/PostController');

router.post("/newPost", createPost);


module.exports = router;

// SELECT * FROM users WHERE deleted_at <= CURDATE(); 
// SELECT * FROM users WHERE deleted_at <= NOW();