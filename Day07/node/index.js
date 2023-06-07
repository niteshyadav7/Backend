const fs = require("fs");
const http = require("http");
const port = 3001;
const hostName = "127.0.0.1";

function requestHandler(req, res) {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  return res.end("<div>Hello</div>");
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server running on http://${hostName}:${port}`);
});
