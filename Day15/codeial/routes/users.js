const express = require("express");

const { signIn, signUp } = require("../controllers/users_controllers");

const router = express.Router();

router.get("/signIn", signIn);
router.get("/signUp", signUp);

module.exports = router;
