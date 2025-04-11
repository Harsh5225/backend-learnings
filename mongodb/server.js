import express from "express";
import dotenv from "dotenv";
import connectDb from "./db.js";
import sampleRoute from "./Routes/sample.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(process.env.PORT)
const PORT = process.env.PORT || 3000;
connectDb();  
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the server",
  });
});

app.use("/api", sampleRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
