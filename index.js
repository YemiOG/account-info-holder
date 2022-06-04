import express from "express";
import bodyParser from "body-parser";
import beneficiaryRoutes from "./routes/beneficiaries.js";

const app = express();
const PORT = 5503;

app.use(bodyParser.json());

app.use("/beneficiaries", beneficiaryRoutes);

app.get("/", (req, res) => {
  console.log("hi");
  res.send("Hello from homepage");
});

app.listen(PORT, () =>
  console.log(`server now runnig on port: http://localhost:${PORT}`)
);
