const http = require("http");
const port = 8000;
const hostName = "127.0.0.1";

// HOW TO READ EXTERNAL FILE =>BY THE USE OF FS MODULE.
const fs = require("fs");

const requestHandler = (req, res) => {
  // HOW TO READ MULTIPLE FILE USING FS MODULE =>BY THE USE OF SWITCH CASE

  let filePath;
  switch (req.url) {
    case "/":
      filePath = "./home.html";
      break;
    case "/contact":
      filePath = "./contact.html";
      break;
    case "/about":
      filePath = "./about.html";
      break;
    default:
      filePath = "./404.html";
  }

  // console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("Error", err);
      return;
    }
    return res.end(data);
  });
  //   return res.end("Hello Nitesh");
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`node running on ${hostName}:${port}`);
});
