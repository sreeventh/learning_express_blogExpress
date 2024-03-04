import express from "express";
import { getPosts,spp } from "../controller/user.js";


const route = express.Router();

// get all posts
route.get("/all",getPosts);

// get one specific post
route.get("/post/:id",spp);

// post a new post

// patch a post

// put a post

// delete a post

// delete all posts

export default route;