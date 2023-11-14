import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user._id } });
    res.send(users);  
  } catch (err) {
    res.status(400).send(err.message);
  }
};
