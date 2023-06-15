const express = require("express");
const { profile } = require("../controllers/profile_controllers");
const { contact } = require("../controllers/contact_controllers");
const { about } = require("../controllers/about_controllers");

const router = express.Router();

router.get("/profile", profile);
router.get("/contact", contact);
router.get("/about", about);

module.exports = router;
