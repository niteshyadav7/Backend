const fs = require("fs");
const http = require("http");
const port = 8000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.writeHead(200, { "content-type": "text/html" });
  let filePath;
  switch (request.url) {
    case "/":
      filePath=("./index.html");
      break;
    case "/contact":
      filePath=("./contact.html");
      break;
    default:
      filePath=("./404.html");
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("Error", err);
      return response.end("<div>Error</div>");
    }
    return response.end(data);
  });
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`server runs on port : ${port}`);
});
