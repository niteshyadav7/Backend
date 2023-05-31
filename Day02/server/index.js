// const http = require("http");
// const port = "1234";
// const requestHandler = (request, response) => {
//   console.log(request.url);
//   response.writeHead(200, { "content-type": "text/html" });
//   response.end("<div>Hello Nitesh Yadav<div>");
// };

// const server = http.createServer(requestHandler);

// server.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(`server runs on ${port}`);
// });

// const http = require("http");
// const fs = require("fs");
// // console.log(fs);
// const port = 8000;

// const requestHandler = (req, res) => {
//   console.log(req.url);
//   res.writeHead(200, { "content-type": "text/html" });
//   fs.readFile("./index.html", (err, data) => {
//     if (err) {
//       console.log("error", err);
//       return res.end("<div>Error</div>");
//     }
//     return res.end(data);
//   });
//   //   res.end("<div>hkdf</div>")
// };

// const server = http.createServer(requestHandler);
// server.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(`server runs : ${port}`);
// });

const http = require("http");
const fs = require("fs");
const port = 8000;
const requestHandler = (req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.log("error", err);
      return res.end("<div>Error</div>");
    }
    return res.end(data);
  });
  //   res.end("<div>Hello Nitesh</div>");
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`server run on :${port}`);
});
