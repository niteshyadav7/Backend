const express = require("express");
const port = 8000;
const hostName = "http://127.0.0.1";
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"), "views");


app.get("/", (req, res) => {
  return res.render("home.ejs");
});

app.use((req, res, next) => {
  res.status(404).render("404.ejs");
});
app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`express runs on ${hostName}:${port}`);
});


