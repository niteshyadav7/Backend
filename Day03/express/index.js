const express = require("express");
const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`express runs on port : ${port}`);
});
