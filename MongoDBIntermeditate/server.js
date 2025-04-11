import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js";
import productRoutes from "./routes/productroutes.js"
import bookRoutes from "./routes/bookroutes.js"
const app=express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded())
connectDB();
const PORT=process.env.PORT||3000;

app.get('/',(req,res)=>{
  res.send("hello server i am  watching you");
})
app.use("/products", productRoutes);
app.use("/reference",bookRoutes);

app.listen(PORT,()=>{
  console.log(`Server is listening on ${PORT}`)
})