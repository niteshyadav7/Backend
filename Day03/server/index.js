const fs = require("fs");
const http = require("http");
const port = 1234;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.writeHead(200, { "content-type": "text/html" });
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      return response.end("<h1>err</h1>");
    }
    response.end(data);
  });
  //   response.end("<h1>Hello Server</h1>");
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server runs on port :", port);
});
