import app from "./app.js";

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`server running on ${process.env.NODE_ENV} mode at port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Unhandled Rejection Error: ${err.stack || err}`);
  server.close(() => process.exit(1));
});
