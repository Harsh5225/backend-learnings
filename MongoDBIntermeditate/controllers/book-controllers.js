import author from "../models/Author.js";
import book from "../models/Book.js";

// create author
// create books

export const createAuthor = async (req, res) => {
  try {
    const authorprofile = new author(req.body);
    await authorprofile.save();

    res.status(201).json({
      success: true,
      data: authorprofile,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

export const createBook = async (req, res) => {
  try {
    const bookdata = new book(req.body);
    await bookdata.save();

    res.status(201).json({
      success: true,
      data: bookdata,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};


export const getauthorBookdetails=async (req,res)=>{
  try {
    // findbook and populate with referce model.
    // populate will replace the reference with actual object

    const bookfind=await book.findById(req.params.id).populate('author');
    if(!bookfind){
      return res.status(404).json({
        success:false,
        message:"Not found"
      })
    }
    return res.status(200).json({
      success:true,
      details:bookfind
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Some error occured",
    })
  }
}