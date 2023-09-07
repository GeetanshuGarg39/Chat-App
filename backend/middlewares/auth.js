import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

export const verifyUser = async (req, res, next) => {
    try {
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {           
            token = req.headers.authorization.split(" ")[1];
        } else if (req.cookies.jwt) {
            token = req.cookies.jwt;
        }        

        if(!token) {
            return res.status(401).json({
                message: "You are not logged in! Please log in to get access.",
            })
        }
        
        const verified = jwt.verify(token, process.env.JWT_SECRET);        
        
        const user = await UserModel.findById(verified.id);
        if(!user) {
            return res.status(401).json({
                message: "The user no longer exists."
            })
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
} 