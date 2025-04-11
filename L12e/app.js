import express from "express";
import dotenv from "dotenv";
import router from "./routes/user.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.use("/api/", router); // /api/  this is the base url for the router

app.get("/", (req, res) => {
  console.log("home page is called");
  res.send("page is working");
});
app.listen(PORT, () => {
  console.log("running");
});
