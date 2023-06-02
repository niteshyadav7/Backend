const express = require("express");
const path = require("path");
const port = 8000;
const bodyParser = require("body-parser");

const app = express();

var contactList = [
  {
    name: "Tony Stark",
    phone: "45445",
  },
  {
    name: "Bruce Wayne",
    phone: "54485",
  },
  {
    name: "Dr. Banner",
    phone: "215665",
  },
  {
    name: "God of Thunder THOR",
    phone: "12545",
  },
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// console.log(path.join(__dirname, "views"));
app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
  return res.render("home", {
    title: "This is my Home Page.",
    contact_list: contactList,
  });
});

app.get("/contact", (req, res) => {
  return res.render("contact", { title: "This is Contact Page" });
});

app.get("/profile", (req, res) => {
  return res.render("profile", { title: "This is Profile Page" });
});

app.post('/create-contact', function(req, res){
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);
    contactList.push({
        
        name: req.body.name,
        phone: req.body.phone,
    })
    // contactList.push(req.body);
    return res.redirect('/');

});
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Yup! express server runs on :", port);
});
