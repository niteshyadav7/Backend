const express = require("express");
const {
  profile,
  signIn,
  signUp,
  create,
} = require("../controllers/profile_controllers");

const router = express.Router();

router.get("/profile", profile);
router.get("/signIn", signIn);
router.get("/signUp", signUp);

router.post("/create", create);

module.exports = router;
