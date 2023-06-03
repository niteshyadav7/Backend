/**
 * HOW TO CREATE SERVER USING EXPRESS
 */

// const express = require("express");
// const port = 8000;

// const app = express();
// app.get("/", (req, res) => {
//   return res.send("<h1>Hello World!</h1>");
// });

// app.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("server run :", port);
// });

/**
 * HOW RO RENDER USING EXTERNAL FILE
 */

// const express = require("express");
// const path = require("path");
// const port = 8000;

// var contactList = [
//   {
//     name: "Tony Stark",
//     phone: 123124,
//   },
//   {
//     name: "Bucky",
//     phone: 4325232,
//   },
//   {
//     name: "Banner",
//     phone: 34324324,
//   },
// ];

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"), "views");

// app.get("/", (req, res) => {
//   return res.render("home", { title: "My Home Page" });
// });

// app.get("/contact", (req, res) => {
//   return res.render("contact", { title: "My Contact Page." });
// });

// app.get("/contactList", (req, res) => {
//   return res.render("contactList", {
//     title: "My Contact List Page",
//     contact_list: contactList,
//   });
// });

// app.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("server runs :", port);
// });

/**
 * HOW TO MAKE MULTIPLE PAGE
 */

// const express = require("express");
// const port = 8000;
// const path = require("path");

// var contactList = [
//   {
//     name: "Tony Stark",
//     phone: 123124,
//   },
//   {
//     name: "Bucky",
//     phone: 4325232,
//   },
//   {
//     name: "Banner",
//     phone: 34324324,
//   },
// ];

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "view"), "views");

// app.get("/", (req, res) => {
//   return res.render("home", { title: "My Home Page" });
// });

// app.get("/contact", (req, res) => {
//   return res.render("contact", {
//     title: "My Contact Page",
//     contact_list: contactList,
//   });
// });

// app.get("/boolean", (req, res) => {
//   return res.render("boolean", { title: "My Boolean Page" });
// });

// app.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("server runs on port :", port);
// });

/**
 * CONTACT PAGE // HOW TO ADD CONTACT DYNAMICALLY
 */


const express = require("express");
const port = 8000;
const path = require("path");
const parser = require("body-parser");

const contactList = [
  {
    name: "Tony Stark",
    phone: 432542,
  },
  {
    name: "Bruce Wayne",
    phone: 324323,
  },
  {
    name: "Thor",
    phone: 45345,
  },
  {
    name: "Banner",
    phone: 4653645,
  },
];

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "listContact"), "views");
app.use(parser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.render("contact", {
    title: "My Contact Page",
    contact_list: contactList,
  });
});

app.post("/create-contact", (req, res) => {
  contactList.push({
    name: req.body.name,
    phone: req.body.phone,
  });
  return res.redirect("/");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server runs on port :", port);
});
