import express from "express"
const router=express.Router();
import { addSample } from "../controllers/sample.js";


router.post("/addSample",addSample);



export default router