import express from "express";

const router = express.Router();

const beneficiaries = [
  {
    firstName: "Opeyemi",
    lastName: "Ogundeyi",
    bank: "GTBank",
    accountNumber: "0121059735",
  },
];

router.get("/", (req, res) => {
  console.log(beneficiaries);
  res.send(beneficiaries);
});

router.post("/", (req, res) => {
  const beneficiary = req.body;
  beneficiaries.push(beneficiary);

  res.send(`${beneficiary.firstName} added to your list`);
  console.log(beneficiaries);
});

export default router;
