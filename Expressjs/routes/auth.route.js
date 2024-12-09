const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
const authValidator = require("../validators/auth.validator");

router.post("/sign-in", authValidator.signIn, authController.signIn);
router.post("/sign-up", authValidator.signUp, authController.signUp);

module.exports = router;
