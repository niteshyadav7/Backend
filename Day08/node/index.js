const http = require("http");
const port = 1234;
const hostName = "127.0.0.1";
const fs = require("fs");

function requestHandler(req, res) {
  console.log(req.url);

  let filePath;
  switch (req.url) {
    case "/":
      filePath = "./myDetails.html";
      break;
    case "/father":
      filePath = "./fatherDetails.html";
      break;
    case "/mom":
      filePath = "./momDetails.html";
      break;
    default:
      filePath = "./404.html";
  }

  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("Error");
      return;
    }
    return res.end(data);
  });
  // return res.end("<div>Hello WOrld!</div>");
}

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server running on http://${hostName}:${port}`);
});
