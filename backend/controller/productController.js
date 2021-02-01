import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc      Fetch all products
// @route     GET   /api/v1/products
export const fetchAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    data: products,
  });
});

// @desc      Fetch all products
// @route     GET   /api/v1/products/:id
export const fetchProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (product) {
    return res.status(200).json({
      success: true,
      data: product,
    });
  } else {
    res.status(404);
    throw new Error("해당 물품을 찾을 수 없습니다");
  }
});
