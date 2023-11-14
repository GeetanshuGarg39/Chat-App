import express from "express";
import authRoute from "./auth.js";
import chatRoute from "./chat.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/chats", chatRoute);

export default router;