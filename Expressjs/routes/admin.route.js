const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin.controller");
const adminAuth = require("../middleware/admin-authenticate.middleware");
const upload = require("../config/multer");

router.get("/users", adminAuth, adminController.getUsers);
router.post(
  "/users/",
  adminAuth,
  upload.single("profileImage"),
  adminController.createUser
);
router.patch(
  "/users/:id",
  adminAuth,
  upload.single("profileImage"),
  adminController.updateUser
);
router.delete("/users/:id", adminAuth, adminController.deleteUser);

module.exports = router;
