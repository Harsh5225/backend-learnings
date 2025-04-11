import express from "express";
import { getdata, postdata } from "../controllers/user.js";
import { middleware } from "../middleware/middleware.js";

const router = express.Router();

router.route("/getdata").get(middleware,getdata);

router.route("/postdata").post(middleware,postdata)

export default router;
