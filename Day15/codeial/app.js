const express = require("express");
const hostName = "http://localhost";
const port = 8000;

const app = express();

app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`express running on ${hostName}:${port}`);
});
