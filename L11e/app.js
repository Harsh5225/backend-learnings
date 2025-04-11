import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config();

console.log(process.env.PORT);
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Page is working");
});

app.get("/setcookie", (req, res) => {
  res.cookie("username", "Harsh");
  res.status(200).json({
    message: "cookie has been set!",
  });
});

app.get("/getcookie", (req, res) => {
  res.status(200).json({
    message: `${req.cookies.username}`,
  });
});

app.post("/data", (req, res) => {
  const obj = req.body;
  const { name, age, email } = req.body;
  console.log(obj);

  re.status(200).json({
    success: "success",
    message: "Account created successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
