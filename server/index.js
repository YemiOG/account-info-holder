import express from "express";
import bodyParser from "body-parser";
import beneficiaryRoutes from "./routes/beneficiaries.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = 5503;

//connect to db

mongoose.connect(process.env.DB_CONNECT, () => console.log("connected to db"));
//middleware
app.use(bodyParser.json());

app.use("/azaholder", beneficiaryRoutes);

app.get("/", (req, res) => {
  console.log("hi");
  res.send("Hello from homepage");
});

app.listen(PORT, () =>
  console.log(`server now runnig on port: http://localhost:${PORT}`)
);
