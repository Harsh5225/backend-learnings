import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import bookRoutes from "./Routes/bookroutes.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();

// middleware for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
