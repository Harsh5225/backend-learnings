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
  if (req.method === "POST" && req.url === "/") {
    let tempData = "";  // Change const to let

    req.on("data", (chunk) => {
      tempData += chunk.toString();
    });

    req.on("end", () => {
      console.log(JSON.parse(tempData));

      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          message: "Account created successfully",
        })
      );
    });
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "Not found" }));
  }
});

server.listen(8000, () => {
  console.log("Serving on port 8000");
});




