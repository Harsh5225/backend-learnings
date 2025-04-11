import express from "express"
import { createAuthor,createBook,getauthorBookdetails } from "../controllers/book-controllers.js";
const router=express.Router();
router.post("/author", createAuthor)
router.post("/book", createBook)
router.get('/book/:id',getauthorBookdetails)

export default router