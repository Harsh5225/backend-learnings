// import jwt from "jsonwebtoken"
//  const isAuthenticate=async (req,res,next)=>{
//   try {
//     const token=req.cookies.token;
//     if(!token){
//       return res.status(401).json({
//         success:false,
//         message:"You are not authorized"
//       })
//     }
//     // verify
//     const decode=jwt.verify(token,process.env.SECRET_KEY);
//     if(!decode){
//       return res.status(401).json({
//         success:false,
//         message:"Invalid token"
//       })
//     }
//     req.id=decode.userID;
//     next();
//   } catch (error) {
//     console.log(error)
//   }
// }

// export default isAuthenticate;