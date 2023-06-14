const express = require("express");
const { home } = require("../controllers/home_controller");

const router = express.Router();

router.get("/", home);
router.use("/users", require("./users"));
console.log("Router is Loaded!");

module.exports = router;
