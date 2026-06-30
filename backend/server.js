import express from "express";
import cors from "cors";

import { initDB } from "./db.js";
import { router } from "./drivers.js";

// Create Express Application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Database
await initDB();

// API Routes
app.use("/api/drivers", router);

// Home Route
app.get("/", (req, res) => {
    res.send("🚖 Ride Analytics Dashboard API is Running...");
});

// Start Server
const PORT = 5000;

const server = app.listen(PORT, () => {

    console.log("----------------------------------");
    console.log("🚖 Ride Analytics Dashboard");
    console.log(`Server Running on Port ${PORT}`);
    console.log("----------------------------------");

});

export default server;