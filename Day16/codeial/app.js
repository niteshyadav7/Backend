const express = require("express");
const cookieParser = require("cookie-parser");
const hostName = "http://localhost";
const port = 3000;
const path = require("path");

// this is for layout to require it and use it before the routing
const expressLayout = require("express-ejs-layouts");

const app = express();

app.use(expressLayout);

// in this line we connected to database
const db = require("./config/mongoose");

app.use(cookieParser());
app.use(express.urlencoded());

// this line is for use the route
app.use("/", require("./routes/index"));

app.set("layout extractStyles", true); //this is line for setUp for the css.
app.set("view engine", "ejs"); //this line for setting the views
app.set("views", path.join(__dirname, "views"), "views"); //this is for setting the views directory
app.use(express.static("./assets")); //this is for setting the assets =>css or styling part

app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`express running on ${hostName}:${port}`);
});
