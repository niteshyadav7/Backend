/**
 * WITHOUT ANY EXTERNAL SOURCE
 */

// const http = require("http");
// const port = 8000;

// const requestHandler = (req, res) => {
//   console.log(req.url);
//   res.writeHead(200, { "content-type": "text/html" });
//   return res.end(`<h1>Hello World without require fs module</h1>`);
// };

// const server = http.createServer(requestHandler);

// server.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(`server runs:${port}`);
// });

/**
 * MAKING SERVER BY USING EXTERNAL PAGE
 */

// const http = require("http");
// const fs = require("fs");
// const port = 8000;

// const requestHandler = (req, res) => {
//   console.log(req.url);
//   res.writeHead(200, { "content-type": "text/html" });
//   fs.readFile("./index.html", (err, data) => {
//     if (err) {
//       console.log("Error", err);
//       return res.end("<h1>Error</h1>");
//     }
//     return res.end(data);
//   });
// };

// const server = http.createServer(requestHandler);
// server.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(`server runs :${port}`);
// });

/**
 * HOW TO RENDER MULTIPLE PAGES
 */


// const http = require("http");
// const fs = require("fs");
// const port = 8000;

// const requestHandler = (req, res) => {
//   console.log(req.url);
//   res.writeHead(200, { "content-type": "text/html" });
//   let filePath;
//   switch (req.url) {
//     case "/":
//       filePath = "./index.html";
//       break;
//     case "/contact":
//       filePath = "./contact.html";
//       break;
//     case "/profile":
//       filePath = "./profile.html";
//       break;
//       default :filePath="./404.html"
//   }

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       console.log("Error", err);
//       return res.end("<h1>Error</h1>");
//     }
//     return res.end(data);
//   });
// };

// const server = http.createServer(requestHandler);
// server.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(`server runs :${port}`);
// });
