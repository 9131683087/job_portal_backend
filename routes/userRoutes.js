import express from "express";
import { getUser, login, logout, register } from "../controllers/userController.js"; // Import the register controller function
import {isAuthenticated} from "../middlewares/auth.js"

const router = express.Router();

// Route for user registration
router.post("/register", register);
router.post("/login", login);
router.get("/logout",isAuthenticated, logout);
router.get("/getUser",isAuthenticated, getUser);

export default router; 
