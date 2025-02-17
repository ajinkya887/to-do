const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// CORS middleware allowing all IP addresses
app.use(
  cors({
    origin: "*", // Allows all domains/IPs
  })
);

app.use("/api/todo", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
