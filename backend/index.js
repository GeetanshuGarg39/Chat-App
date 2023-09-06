import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Configurations
dotenv.config();
const app = express();
app.use(
    cors({
        origin: "*",
        methods: ["GET", "PATCH", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);

// Load Routes
app.get('/', (req, res) => {
    res.send('Chat Application server!');
})

// Database Connection
const PORT = process.env.PORT || '8000'
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => {
            console.log(`Server listening at http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}
connectDB();