import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "server running~😂",
  });
});

export default app;
