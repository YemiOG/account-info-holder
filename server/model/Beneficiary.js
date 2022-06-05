import mongoose from "mongoose";

const beneficiarySchema = new mongoose.Schema({
  firstName: { type: String, required: true, min: 6, max: 26 },
  lastName: { type: String, required: true, min: 6, max: 26 },
  bank: { type: String, required: true, min: 6, max: 26 },
  accountNumber: { type: String, required: true, min: 10, max: 10 },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Beneficiary,", beneficiarySchema);
