const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  const filepath = __dirname + "/index.html";
  console.log(filepath);
  const file = fs.readFileSync(filepath);
  res.end(file);
});

server.listen(8000, () => {
  console.log("server is running on 8000");
});
