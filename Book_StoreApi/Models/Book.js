import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
  title:{
    type:String,
    required:[true,"Book title is required"],
    trim:true,
    maxLength:[100,"Max length book cannot go beyond 100 pages"]
  },
  author:{
    type:String,
    required:[true,'Author name is required'],
    trim:true,
  },
  year:{
    type:Number,
    required:[true,'Publication year is required '],
    min:[1000,'Year must be atleast 1000'],
    max:[new Date().getFullYear(),'year cannot be in future']

  },
  createAt:{
    type:Date,
    default:Date.now,
  }
})


export const bookModel=mongoose.model('bookModel',bookSchema);