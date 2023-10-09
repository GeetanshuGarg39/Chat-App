import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
import ConnectDB from "./database/db.js";

// Configurations
const app = express();

dotenv.config();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "PATCH", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);
app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Loading routes
app.use('/',routes);

const PORT = process.env.PORT || '8000'
const MONGO_URL = process.env.MONGO_URL

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})

ConnectDB(MONGO_URL);