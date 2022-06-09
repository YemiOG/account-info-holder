import express from "express";
import Beneficiary from "../model/Beneficiary.js";
import mongoose from "mongoose";
const router = express.Router();

// const beneficiaries = [
//   {
//     firstName: "Opeyemi",
//     lastName: "Ogundeyi",
//     bank: "GTBank",
//     accountNumber: "0121059735",
//   },
// ];

// router.get("/", (req, res) => {
//   console.log(beneficiaries);
//   res.send(beneficiaries);
// });

//create new beneficiary

/* @route POST azaholder/add-aza 
   @access public
   @desc add your details  */

router.post("/add-aza", async (req, res) => {
  const beneficiary = new Beneficiary({
    firstName: req.body.firstName,
    lastName: req.body.firstName,
    bank: req.body.bank,
    accountNumber: req.body.accountNumber,
  });
  try {
    await beneficiary.save();
  } catch (error) {
    res.status(400).send(error);
  }

  res.send(`${beneficiary.firstName} added yo the list`);
});

export default router;
