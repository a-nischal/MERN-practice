const Product = require("../models/Product");
const Order = require("../models/Order");
const getProducts = async (req, res) => {
  const featuredProducts = await Product.find({
    isFeatured: true,
  }).limit(4);

  const latestProducts = await Product.find()
    .sort({
      createdAt: "desc",
    })
    .limit(4);
  res.json({
    featuredProducts,
    latestProducts,
  });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.json({
    products,
  });
};

// better to keep it in different controller (user.controller.js)

const getOrders = async (req, res) => {
  const { limit = 10, page = 1, status } = req.query;
  const filter = {
    userId: req.user.id,
  };

  if (status?.length > 0) {
    filter.status = status;
  }

  const orders = await Order.find(filter)
    .limit(limit)
    .skip((page - 1) * limit);

  const count = await Order.countDocuments(filter);

  res.json({
    data: orders,
    count,
    page,
    totalPage: Math.ceil(count / limit),
  });
};

module.exports = {
  getProducts,
  getAllProducts,
  getOrders,
};
