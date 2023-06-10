const express = require("express");
const port = 8000;

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello Nitesh");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server", port);
});
