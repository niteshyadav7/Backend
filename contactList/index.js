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

const db = require("./config/mongoose");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "listContact"), "views");
app.use(parser.urlencoded({ extended: false }));
app.use(express.static("assets"));

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

app.get("/delete-contact/", function (req, res) {
  console.log(req.query);
  let phone = req.query.phone;

  let contactindex = contactList.findIndex((contact) => contact.phone == phone);

  if (contactindex != -1) {
    contactList.splice(contactindex, 1);
  }

  return res.redirect("back");
});
