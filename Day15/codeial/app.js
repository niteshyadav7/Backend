const express = require("express");
const hostName = "http://localhost";
const port = 1235;
const path = require("path");

const app = express();

app.use("/", require("./routes/index"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"), "views");

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`express running on ${hostName}:${port}`);
});
