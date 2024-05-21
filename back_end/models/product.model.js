const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter product name"],
      minlength: [3, "Product name must be at least 3 characters long"],
    },
    author: {
      type: String,
      required: true,
      default: "",
      min: ["Quantity cannot be negative"],
    },
    content: {
      type: String,
      required: true,
      default: "",
      min: ["Price cannot be negative"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("News", ProductSchema);
module.exports = Product;
