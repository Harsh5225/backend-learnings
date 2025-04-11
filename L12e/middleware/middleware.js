export const middleware=(req,res,next)=>{
  console.log("middleware is called");
  next();
}

