const express = require("express");

const { home } = require("../controllers/home_controllers");

const router = express.Router();

router.get("/", home);

router.use("/user", require("./user"));

console.log(`Router is Loaded!`);

module.exports = router;
