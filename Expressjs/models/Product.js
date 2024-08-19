const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: String,
    quantity: Number,
    price: Number,
    isFeatured: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
