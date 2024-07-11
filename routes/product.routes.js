const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

router.post("/createProduct", productController.createProduct);
router.get("/getProduct", productController.getProducts);
router.get("/getProduct/:id", productController.getProductById);
router.get("/delete/:id", productController.deleteProduct);

module.exports = router;
