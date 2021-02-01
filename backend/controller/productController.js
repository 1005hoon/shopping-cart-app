import asyncHandler from "express-async-handler";

export const fetchAllProducts = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "get all products",
  });
});

export const fetchProduct = asyncHandler(async (req, res, next) => {
  // const id = req.params.id
  res.status(200).json({
    success: true,
    data: "get product for certain id",
  });
});
