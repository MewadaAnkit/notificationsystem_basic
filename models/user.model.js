// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    socketId: {
      type: String, // for real-time tracking
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

