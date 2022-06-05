import express from "express";
import Beneficiary from "../model/Beneficiary.js";

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

router.post("/add-beneficiary", async (req, res) => {
  const beneficiary = new Beneficiary({
    firstName: req.body.firstName,
    lastName: req.body.firstName,
    bank: req.body.bank,
    accountNumber: req.body.accountNumber,
  });
  try {
    const savedBeneficiary = await beneficiary.save;
  } catch (error) {
    res.status(400).send(error);
  }

  res.send(`${beneficiary.firstName} added to your list`);
});

export default router;
