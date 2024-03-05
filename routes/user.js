import express from "express";
import { getPosts,spp,newp,editp,delp,filtration } from "../controller/user.js";


const route = express.Router();

// get all posts
route.get("/post",getPosts);

// get one specific post
route.get("/post/:id",spp);

// get specific type of posts
route.get("/filter",filtration)

// post a new post
route.post("/post",newp)

// patch a post
route.patch("/post/:id",editp)

// put a post

// delete a post
route.delete("/post/:id",delp)

// delete all posts

export default route;