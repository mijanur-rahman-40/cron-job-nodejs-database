import express from "express";
const router = express.Router();

import postController from '../controllers/postController';


router
    .route("/")
    .get(postController.getAllPosts)
    .post(postController.createPost);


router    

export default router;


// SELECT * FROM users WHERE deleted_at <= CURDATE(); 
// SELECT * FROM users WHERE deleted_at <= NOW();