import mongoose from "mongoose";

const bookSchema=new mongoose.Schema(
  {
    title:String,
    author:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"author", //References the "Author" collectio
    }
  }
)


const book= mongoose.model("book",bookSchema);

export default book;


// !Example

// author
// {
//   "_id": ObjectId("651f8d7e4c2b8f0001a0a8b3"),
//   "name": "J.K. Rowling"
// }


// books
// {
//   "_id": ObjectId("661f8d7e4c2b8f0001a0b123"),
//   "title": "Harry Potter",
//   "author": ObjectId("651f8d7e4c2b8f0001a0a8b3")  Reference to "Author"
// }


