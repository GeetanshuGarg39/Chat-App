import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content:{
        type: String,
        trim:true
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Chat"
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.Model("Message", MessageSchema);
export default Message;
