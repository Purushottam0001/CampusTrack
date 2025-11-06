// backend/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // Needed to emulate __dirname in ES modules

// --- Fix __dirname for ES modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

// --- Middleware ---
app.use(express.json());

// Configure CORS ONCE (no duplicate app.use(cors()))
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",                 // if you dev with Vite
      "https://campustrack.vercel.app",        // your Vercel frontend (adjust if different)
      "https://campustrack-htu1.onrender.com", // if you ever serve frontend from Render
      "https://campustrack.up.railway.app"     // if you host frontend on Railway (adjust/remove)
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// --- API ROUTES ---
import authRoutes from "./routes/auth/auth.js";
import adminRoutes from "./routes/admin/admin.js";
import postRoutes from "./routes/post/post.js";
import userRoutes from "./routes/user/user.js";
import notificationsRoutes from "./routes/notifications/notification.js";
import commentRoutes from "./routes/comments/comment.js";
import uploadRoutes from "./routes/upload/upload.js";

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/post", postRoutes);
app.use("/api/notification", notificationsRoutes);

// FIX: mount comments at /api/comment (not /api/post)
app.use("/api/comment", commentRoutes);

app.use("/api/upload", uploadRoutes);

// --- MongoDB CONNECTION ---
// Make sure your env var name matches Render: MONGO_URI (or change below to MONGO_URL if that's what you set)
mongoose
  .connect(process.env.MONGO_URI || process.env.MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- Serve frontend build in production ---
if (process.env.NODE_ENV === "production") {
  // ../frontend/dist from backend/
  const distPath = path.join(__dirname, "..", "frontend", "dist");

  // Serve JS/CSS/assets
  app.use(express.static(distPath));

  // SPA fallback for all non-API routes
  app.get(/^\/(?!api\/).*/, (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// --- Health check (optional, nice for testing) ---
app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

// --- Start Server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
