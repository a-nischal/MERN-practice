
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.controller");
const authenticate = require("../middleware/authenticate.middleware");

router.get("/products", homeController.getProducts);
router.get("/products/all", homeController.getAllProducts);
router.get("/user/orders", authenticate, homeController.getOrders);

module.exports = router;