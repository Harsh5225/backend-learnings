// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./db/database.js";
// import userRouter from "./routes/user.js";
// import todoRouter from "./routes/todo.js"
// import cookieParser from "cookie-parser";
// import cors from "cors";
// const app = express();

// dotenv.config();
// connectDB();


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(cors({
//   origin:"http://localhost:5173",
//   credentials:true
// }))
// const PORT = process.env.PORT || 3000;

// app.use("/api", userRouter);
// app.use("/api/v1",todoRouter)

// app.get("/", (req, res) => {
//   res.send("hello");
// });

// app.listen(PORT, () => {
//   console.log("server is running", PORT);
// });
