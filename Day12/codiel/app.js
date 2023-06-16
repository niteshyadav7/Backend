const express = require("express");
const hostName = "http://localhost";
const port = 8000;
const path = require("path");

const app = express();

// middleware
app.use("/", require("./routes/index"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"), "views");

app.listen(port, (err) => {
  if (err) {
    console.log("error", err);
  }
  console.log(`server runs on ${hostName}:${port}`);
});
