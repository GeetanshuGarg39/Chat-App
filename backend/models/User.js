import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    about: {
        type: String,
        default: "",
    },
    avatar: {
        type: String,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    friends: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
    ],
    socket_id: {
        type: String
    },
    status: {
        type: String,
        enum: ["Online", "Offline"]
    }
})

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;