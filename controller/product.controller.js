const Product = require("../model/productModel");

// Create a new product
const createProduct = async (req, res) => {
  console.log("req", req.body);
  try {
    const product = new Product(req.body);
    await product.save();
    res
      .status(201)
      .json({ message: "Product created successfully", data: product });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      res.status(404).json({ message: "No products found" });
    } else {
      res
        .status(200)
        .json({ message: "Products retrieved successfully", data: products });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get product by Id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log("product", product);
    if (product.length === 0) {
      res.status(404).json({ message: "No product found" });
    } else {
      res
        .status(200)
        .json({ message: "Product retrieved successfully", data: product });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res.status(404).json({ message: "No user found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
};
