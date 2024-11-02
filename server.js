
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const logRoutes = require("./routes/logs");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", logRoutes);

const PORT = process.env.PORT || 5000;

// MongoDB connection


require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

