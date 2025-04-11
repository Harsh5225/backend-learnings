// import { user } from "../models/user.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export const register = async (req, res) => {
//   try {
//     const { Fullname, email, password } = req.body;
//     if (!Fullname || !email || !password) {
//       return res
//         .status(400)
//         .json({ message: "All fields are required", success: false });
//     }
//     const userExists = await user.findOne({ email });
//     if (userExists) {
//       return res
//         .status(400)
//         .json({ message: "user already exists", success: false });
//     }
//     const hashedpassword = await bcrypt.hash(password, 10);
//     await user.create({
//       Fullname,
//       email,
//       password: hashedpassword,
//     });
//     return res.status(200).json({ message: "user registered", success: true });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Internal Server Error", success: false });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     res.set("channelName", "Harsh Singh");
//     const { email, password } = req.body;
//     console.log(email, password);
//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ message: "All fields are required", success: false });
//     }

//     const userExists = await user.findOne({ email });
//     if (!userExists) {
//       return res
//         .status(400)
//         .json({ message: "user does not exists", success: false });
//     }

//     const isMatch = await bcrypt.compare(password, userExists.password);
//     if (!isMatch) {
//       return res
//         .status(400)
//         .json({ message: "password is wrong", success: false });
//     }

//     const token = jwt.sign({ userID: userExists._id }, process.env.SECRET_KEY, {
//       expiresIn: "1d",
//     });

//     return res
//       .status(200)
//       .cookie("token", token, {
//         httpOnly: true,
//         sameSite: "strict",
//         maxAge: 24 * 60 * 60 * 1000,
//       })
//       .json({ message: `${userExists.Fullname} is logged in`, success: true });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Internal Server Error", success: false });
//   }
// };

// export const logout = async (_, res) => {
//   try {
//     console.log("hello i am logout")
//     return res.status(200).cookie("token", "", { maxAge: 0 }).json({
//       success: true,
//       message: "You have logged out successfully",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
