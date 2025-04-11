const fs=require('fs');


// console.log('Before reading')
// // Reading a file
// fs.readFile('input.txt','utf8',(err,data)=>{
//   if(err) throw err;
//   console.log(data)
// })

// console.log('After reading');
// //
// const data=fs.readFileSync('input.txt','utf-8');

// console.log(data)


// recommnded way to read a file
const readStream=fs.createReadStream('input.txt','utf-8');
// console.log(readStream)


readStream.on('data',(chunk)=>{
  console.log(chunk)
})