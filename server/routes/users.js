import express from "express";
import User from "../model/User.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

const router = express.Router();
dotenv.config();

//load validation
import validateLoginInput from "../validation/login.js";
import validateRegisterInput from "../validation/register.js";

// @desc Register the user
// @route GET azaholder/register
// @access Public
router.post("/register", async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  //Check if valid
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //check if email exists on db
  const emailExist = await User.findOne({ email: req.body.email });

  if (emailExist) {
    return res.status(400).json({ email: "Email already exixts" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  console.log("It went");

  return res.status(200).json({ msg: "User created Successfully!" });
});

// @desc login user / return jwt token
// @route GET azaholder/login
// @access Public

router.post("/login", async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //Check if valid
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Find user by email
  const user = await User.findOne({ email: req.body.email });
  // check for user
  if (!user) return res.status(404).json({ email: "User not found" });
  // check password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email or Password in Invalid");

  // creating JWT payload
  const payload = { id: user._id };

  // sign token
  const token = jwt.sign(payload, `${process.env.TOKEN_SECRET}`, {
    expiresIn: 3600,
  });

  return res.status(200).json({ msg: "Log in Successfully", token });
});

export default router;
