import express from "express";
import {signup, signin, getProfile} from "../controller/controller.js";
import {isAuthenticated} from "../auth/middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/profile", isAuthenticated, getProfile);

export default router;
