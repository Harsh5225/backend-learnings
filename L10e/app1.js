import express from "express";
const app=express();

app.use(express.json());
app.use(express.urlencoded());
const PORT=8000;


app.get('/',(req,res)=>{
return res.status(200).json({
  message:"Hello everyone"
})
})

app.post('/adddata',(req,res)=>{
  

})

app.listen(PORT,()=>{
  console.log(`Server is listening at ${PORT}`)
})