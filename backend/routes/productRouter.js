import express from "express";
import asyncHandler from "express-async-handler";

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "products api connected",
  });
});

export default router;
