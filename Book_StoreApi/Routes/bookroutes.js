import express from "express";
import {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateSingleBookById,
  deleteBook,
} from "../controllers/bookcontroller.js";
const router = express.Router();

router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBookById);
router.post("/add", addNewBook);
router.put("/update/:id", updateSingleBookById);
router.delete("/delete/:id", deleteBook);

export default router;
