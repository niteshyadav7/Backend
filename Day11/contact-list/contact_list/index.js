const express = require("express");
const port = 8000;
const hostName = "http://localhost";
const path = require("path");

// DUMMY DATA FOR CONTACT LIST
var contact_list = [
  {
    name: "Batman",
    phone: "8875922021",
  },
  {
    name: "Superman",
    phone: "8875912356",
  },
  {
    name: "Flash",
    phone: "8865912020",
  },
  {
    name: "Thor",
    phone: "8875912020",
  },
  {
    name: "Captain America",
    phone: "8875923212",
  },
  {
    name: "Loki",
    phone: "1541524544",
  },
];

const app = express();
// HOW TO SET EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"), "views");
// HOW TO USE PARSER FOR ADDING
app.use(express.urlencoded());
//  HOW TO USE CSS
app.use(express.static("assets"));

// HOW TO RENDER EXTERANL FILE
app.get("/", (req, res) => {
  return res.render("contact.ejs", {
    title: "My Contact Page",
    contactList: contact_list,
  });
});

// HOW TO POST
app.post("/addContact", (req, res) => {
  contact_list.push({
    name: req.body.name,
    phone: req.body.phone,
  });
  return res.redirect("/");
});


app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`express running on ${hostName}:${port}`);
});
app.get("/deleteContact", (req, res) => {
  let phone = req.query.phone;
  let contactIndex = contact_list.findIndex(
    (contact) => (contact.phone = phone)
  );
  if (contactIndex != -1) {
    contact_list.splice(contactIndex, 1);
  }
  return res.redirect("back");
});



// HOW TO WRITE ERROR PAGE
app.use((req, res, nxt) => {
  res.status(404).render("404.ejs");
});
