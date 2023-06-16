const express = require("express");
const port = 8000;
const hostName = "http://localhost";
const path = require("path");

// HOW TO COONECT TO MONGOOSE

const db = require("./config/mongoose");

const Contact = require("./models/contact");

// How to make schema

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
// app.get("/", (req, res) => {
//   return res.render("contact.ejs", {
//     title: "My Contact Page",
//     contactList: contact_list,
//   });
// });
app.get("/", async (req, res) => {
  const contact = await Contact.find({});
  return res.render("contact", {
    title: "My Contact Page",
    contactList: contact,
  });
});

// HOW TO POST
// app.post("/addContact", (req, res) => {
//   // contact_list.push({
//   //   name: req.body.name,
//   //   phone: req.body.phone,
//   // });
//   // return res.redirect("/");
//   Contact.create(
//     {
//       name: req.body.name,
//       phone: req.body.phone,
//     },
//     function (err, newContact) {
//       if (err) {
//         console.log("Error occurs during the creating contact");
//         return;
//       }
//       console.log("****", newContact);
//       return res.redirect("back");
//     }
//   );
// });

app.post("/create-contact", async function (req, res) {
  await Contact.create({
    name: req.body.name,
    phone: req.body.phone,
  });
  return res.redirect("back");
});
app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`express running on ${hostName}:${port}`);
});


app.get("/deleteContact", async (req, res) => {
  let id = req.query.id;
  await Contact.findByIdAndDelete(id)
  return res.redirect("back");
});

// // HOW TO WRITE ERROR PAGE
// app.use((req, res, nxt) => {
//   res.status(404).render("404.ejs");
// });
