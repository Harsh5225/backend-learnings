import { bookModel } from "../Models/Book.js";

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await bookModel.find({});
    if (allBooks.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Book fetched successfully",
        books: allBooks,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "No books found in database",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getSingleBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const bookdetails = await bookModel.findById(id);
    if (bookdetails) {
      return res.status(200).json({
        success: true,
        message: "Book fetched successfully",
        books: bookdetails,
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "No book is found in database by your id,kindly check your id ",
    });
  }
};
export const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlycreatedBook = await bookModel.create(newBookFormData);

    if (newlycreatedBook) {
      return res.status(200).json({
        success: true,
        message: "Book added successfully",
        data: newlycreatedBook,
      });
    }
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: error,
    });
  }
};


export const updateSingleBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body;

    const updatedata = await bookModel.findByIdAndUpdate(id, title, {
      new: true,
    });
    await updatedata.save();
    return res.status(200).json({
      message: "updated successfully",
      updatedata,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedbook = await bookModel.findByIdAndDelete(id);
    if (deletedbook) {
      return res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        deletedbook,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};


