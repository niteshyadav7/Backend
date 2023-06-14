const express = require("express");
const { profile } = require("../controllers/users_controllers");

const router = express.Router();

router.get("/profile", profile);

module.exports = router;
