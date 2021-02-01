import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

import productsRouter from "./routes/productRouter.js";
app.use("/api/v1/products", productsRouter);

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

app.use(notFound);
app.use(errorHandler);

export default app;
