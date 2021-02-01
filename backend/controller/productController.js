import asyncHandler from "express-async-handler";

// @desc      Fetch all products
// @route     GET   /api/v1/products
export const fetchAllProducts = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "get all products",
  });
});

// @desc      Fetch all products
// @route     GET   /api/v1/products/:id
export const fetchProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    success: true,
    data: `get product with id ${id}`,
  });
});
