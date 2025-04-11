// import { todo } from "../models/todo.js";
// export const todoData = async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     if (!title || !description) {
//       return res.status(403).json({
//         message: "All fields are required",
//         success: false,
//       });
//     }
//     const todolist = new todo({ title, description });
//     await todolist.save();
//     // await todo.create({
//     //   title,
//     //   description
//     // })

//     return res.status(200).json({
//       message: "Todo created successfully",
//       success: true,
//       todolist,
//     });
//   } catch (error) {
//     return res.status(403).json({
//       message: "Not succeded",
//       success: false,
//     });
//   }
// };

// // data get
// export const gettodo = async (req, res) => {
//   try {
//     const data = await todo.find();
//     return res.status(200).json({
//       message: "Data fetched successfully",
//       success: true,
//       data,
//     });
//   } catch (error) {
//     return res.status(403).json({
//       message: "Not succeded",
//       success: false,
//     });
//   }
// };

// // update todo

// export const updatetodo = async (req, res) => {
//   try {
//     const id = req.params.todoId;

//     const title = req.body;

//     const tododata = await todo.findByIdAndUpdate(id, title, { new: true });
//     await tododata.save();
//     return res.status(200).json({
//       message: "updated successfully",
//       tododata,
//     });
//   } catch (error) {
//     return res.status(403).json({
//       message: "Not succeded",
//       success: false,
//     });
//   }
// };

// export const deletetodo = async (req, res) => {
//   try {
//     const id = req.params.todoId;
//     console.log(id);
//     const deletedata = await todo.findByIdAndDelete(id);

//     if (!deletedata) {
//       return res.status(404).json({
//         success: false,
//         message: "Todo not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Deleted successfully",
//       deletedata,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Deletion failed",
//       success: false,
//       error: error.message,
//     });
//   }
// };
