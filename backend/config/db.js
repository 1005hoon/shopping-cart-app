import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`db connected :: ${conn.connection.name}`);
  } catch (error) {
    console.error(`error :: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
