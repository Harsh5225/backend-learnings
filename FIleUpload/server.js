import express from "express";
import dotenv from "dotenv";
import path from "path"; // Missing import
import uploadImageroutes from "./routes/imageRoutes.js";
import { fileURLToPath } from "url";
import cors from "cors";
const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:8000",
    methods: ["GET", "POST"],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", uploadImageroutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
