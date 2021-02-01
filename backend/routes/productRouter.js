import express from "express";
import {
  fetchAllProducts,
  fetchProduct,
} from "../controller/productController.js";

const router = express.Router();

router.get("/", fetchAllProducts);
router.get("/:id", fetchProduct);

export default router;
