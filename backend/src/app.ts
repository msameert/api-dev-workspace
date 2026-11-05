import express from "express";

const app = express();


// Middle-Ware
app.use(express.json());


// Routes
app.get("/api/health", (req,res) => {
    res.status(200).json({
        success: true,
        message: "API dev Workspace backend is Running",
        timestamp: new Date(),
    })
})

export default app;
