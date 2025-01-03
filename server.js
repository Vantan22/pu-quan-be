import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import { PORT } from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Kết nối đến MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
