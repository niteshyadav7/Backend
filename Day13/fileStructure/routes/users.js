const express = require("express");
const { profile } = require("../controllers/profile_controllers");

const router = express.Router();

router.get("/profile", profile);

module.exports = router;
