// const http = require("http");

// const server=http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type':'text/plain'});
//   res.end("Hello i am coming from web server");
// })

// server.listen(8000,()=>{
//   console.log('Server is running on port 8000');
// })

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/") {
//     let tempData = "";
//     res.on("data", (chunk) => {
//       tempData += chunk.toString();
//     });

//     res.on("end", () => {
//       console.log(JSON.parse(tempData));

//       res.writeHead(200, { "content-type": "text/plain" });
//       res.end(
//         JSON.stringify({
//           success: true,
//           message: "Account created successfully",
//         })
//       );
//     });
//   } else {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end(JSON.stringify({ success: false, message: "Not found" }));
//   }
// });

// server.listen(8000, () => {
//   console.log("Serving on port 8000");
// });

const http = require("http");

const server = http.createServer((req, res) => {
  if(req.url==='/') res.end("Helllo");
  if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end("Contact page");
  }
  else{
    res.end("Default page")
  }
  
});

server.listen(8000, () => {
  console.log("server is listening");
});
