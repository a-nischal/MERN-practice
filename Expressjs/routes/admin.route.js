const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin.controller");
const adminAuth = require("../middleware/admin-authenticate.middleware");

router.get("/users", adminAuth, adminController.getUsers);

module.exports = router;
