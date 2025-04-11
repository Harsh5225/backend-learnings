import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb Connected");
  } catch (error) {
    console.log("Mongodb connection failed...", error);
  }
};

export default connectDB;
