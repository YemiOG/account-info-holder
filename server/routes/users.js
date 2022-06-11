import express from "express";
import User from "../model/User.js";
import mongoose from "mongoose";
const router = express.Router();

// Register new user
router.post("/register");

export default router;
