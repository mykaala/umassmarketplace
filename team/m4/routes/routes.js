import express from "express";
import {signup, signin, getProfile} from "../controller/controller.js";
import {isAuthenticated} from "../auth/middleware.js";

const router = express.Router(); //creating a router instance

router.post("/signup", signup); //sends the sign up requests to the sign up function implemented in controller/controller.js
router.post("/signin", signin); //sends the sign in requests to the sign in function implemented in controller/controller.js
router.get("/profile", isAuthenticated, getProfile); //if the profile access has been requested checks to see if the user is authenticated first.

export default router; //exporting the router to be used in other files
