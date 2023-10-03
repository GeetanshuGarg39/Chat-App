import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGroupChat:{
      type: Boolean,
      default: false,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", ChatSchema);
export default Chat;
