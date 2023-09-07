import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register User function
const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email: email })

        if (existingUser) {
            res.status(400).json({
                status: "error",
                message: "Email already in use, try with some other.",
            })
        } else {
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt);

            const newUser = new UserModel({
                firstName,
                lastName,
                email,
                password: passwordHash,
            })            

            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// Login User function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if(!email || !password) {
            return res.status(400).json({
                status: "error",
                message: "Both email and password are required",
            })
        }

        const user = await UserModel.findOne({ email: email });

        if( !user ) {
            return res.status(400).json({
                status: "error",
                message: "User does not exist."
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({
                status: "error",
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        res.status(200).json({
            status: "success",
            message: "Logged in successfully",
            token,
            user_id: user._id,
        })
        
    } catch (err) {
        res.status(500).json({ error: err.message })        
    }
}

export { register, login }
