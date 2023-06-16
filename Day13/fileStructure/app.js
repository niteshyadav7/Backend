const express = require("express");
const hostName = "http://localhost";
const port = 8000;
const path = require("path");
const expressLayout = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"), "views");

app.use(express.static("./assets"))

// layout
app.use(expressLayout);

// middleware
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`express running on ${hostName}:${port}`);
});
