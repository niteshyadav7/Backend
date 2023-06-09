const express = require("express");
const port = 8000;
const path = require("path");
const hostName = "http://localhost";
const expressLayout = require("express-ejs-layouts");

const db = require("./config/mongoose");

const app = express();



app.use(express.static("assets"));

app.use(expressLayout);

app.use("/", require("./routes/index"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"), "views");

app.listen(port, (err) => {
  if (err) {
    console.log("error", err);
  }
  console.log(`Express running on ${hostName}:${port}`);
});
