const express = require("express");
const { home } = require("../controllers/home_controllers");

const router = express.Router();

router.get("/", home);
router.use("/users", require("./users"));

console.log("Router Loaded!");

module.exports = router;
