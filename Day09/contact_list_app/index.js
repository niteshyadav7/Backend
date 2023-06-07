const express = require("express");
const path = require("path");
const port = 8000;
const hostName = "127.0.0.1";

const app = express();

var contactList = [
  {
    name: "Hulk",
    phone: "8745",
  },
  {
    name: "Iron Man",
    phone: "3565",
  },
  {
    name: "Thor",
    phone: "8798",
  },
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"), "views");
app.use(express.urlencoded());
app.use(express.static("assets"));

app.get("/", (req, res) => {
  return res.render("contact", {
    title: "My Contact List Page",
    contact_list: contactList,
  });
});

app.post("/add", (req, res) => {
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
  console.log(`express running on http://${hostName}:${port}`);
});
app.get("/delete-contact/", (req, res) => {
  //   console.log(req.query);
  let phone = req.query.phone;
  let contactIndex = contactList.findIndex(
    (contact) => (contact.phone = phone)
  );
  if (contactIndex != -1) {
    contactList.splice(contactIndex, 1);
  }
  return res.redirect("back");
});
