const express = require("express");
const hostName = "http://localhost";
const port = 8000;
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"), "views");

// middleware
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`express running on ${hostName}:${port}`);
});
