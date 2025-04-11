import mongoose from "mongoose";


const connectDb=async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
}

export default connectDb;