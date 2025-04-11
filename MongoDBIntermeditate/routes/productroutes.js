import express from "express";
import { insertSampleProducts,getProductsInfo,getProductanalysis } from "../controllers/product-controller.js";
const router=express.Router();


router.post('/add',insertSampleProducts)
router.get('/get',getProductsInfo)
router.get('/getanalysis',getProductanalysis)

export default router;