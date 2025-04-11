// import express from "express";
// import {
//   deletetodo,
//   gettodo,
//   todoData,
//   updatetodo,
// } from "../controllers/todo.js";
// import isAuthenticate from "../middlewares/isAuthenticated.js";
// const router = express.Router();

// router.get("/getdata", gettodo);
// // router.post("/add", (isAuthenticate, todoData));

// // this wrong because i have wrapped middleware and services with each other

// router.post("/add", isAuthenticate, todoData);
// router
//   .route("/add/:todoId")
//   .delete(isAuthenticate, deletetodo)
//   .put(isAuthenticate, updatetodo);

// export default router;
