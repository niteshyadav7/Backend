const express = require("express");
const port = 3000;
const path = require("path");
const hostName = "127.0.01";

var contactList = [
  {
    name: "Iron Man",
    phone: "1234",
  },
  {
    name: "Hulk",
    phone: "3435",
  },
  {
    name: "Thor",
    phone: "5434",
  },
  {
    name: "Batman",
    phone: "5454",
  },
  {
    name: "Loki",
    phone: "7567",
  },
];

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  return res.render("home", {
    title: "My Home Page",
  });
});

app.get("/about", (req, res) => {
  return res.render("about", { title: "My About Page" });
});

app.get("/contact", (req, res) => {
  return res.render("contact", {
    title: "My Contact Page",
    contact_list: contactList,
  });
});

app.get("/dummy", (req, res) => {
  return res.render("dummy", { title: "My Dummy Page" });
});

app.post("/contact", (req, res) => {
  contactList.push({
    name: req.body.name,
    phone: req.body.phone,
  });
  return res.redirect("/contact");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`express running on http://${hostName}:${port}`);
});
