const express = require("express");
const hostName = "http://localhost";
const port = 8000;
const path = require("path");
const expressLayout = require("express-ejs-layouts");

const app = express();

const db = require("./config/mongoose");

app.use(expressLayout);

app.use("/", require("./routes/index"));

app.set("layout extractStyles", true);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"), "views");

app.use(express.static("./public"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`express running on ${hostName}:${port}`);
});
