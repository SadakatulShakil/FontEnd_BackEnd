const express = require("express");
const {
  getAllUser,
  registerUser,
  loginUser,
  userProfile,
} = require("../controllers/user.Controller");
const validateToken = require("../middleware/validedTokenHandler");
const router = express.Router();

router.get("/all", getAllUser);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", validateToken, userProfile);

module.exports = router;
