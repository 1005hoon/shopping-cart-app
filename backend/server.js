import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "server running~😂",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on ${process.env.NODE_ENV} mode at port ${PORT}`);
});
