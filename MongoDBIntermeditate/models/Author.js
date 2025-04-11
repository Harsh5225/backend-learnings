import mongoose from "mongoose";

const authorSchema= new mongoose.Schema({
  name: String,
  bio: String,
})

 const author=mongoose.model('author',authorSchema);

export default author