import express from "express";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
import { imageControllers } from "../controller/imagecontroller.js";
import { mulitpleImages } from "../controller/multipleImage.js";
const Router = express.Router();

Router.post("/upload", uploadMiddleware.single("image"), imageControllers);

Router.post("upload/multiple,", uploadMiddleware.array("images", 5),mulitpleImages);

export default Router;
