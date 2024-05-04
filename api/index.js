import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Routes
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

// dotenv config
dotenv.config();

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

// middleware
app.use(express.json());

// app listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// user routes
app.use("/api/user", userRoutes);

// auth routes
app.use("/api/auth", authRoutes);

// middleware
/**
 * Lưu ý không được để lẫn lộn các thứ tự middleware!
 */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
