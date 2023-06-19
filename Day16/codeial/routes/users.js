const express = require("express");

const { signIn, signUp, create } = require("../controllers/users_controllers");

const router = express.Router();

router.route("/signIn").get(signIn);
router.route("/signUp").get(signUp);

router.post("/create", create);

module.exports = router;
