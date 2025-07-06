const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: String,
    message: String,
    type: {
      type: String,
      enum: ["info", "success", "warning", "error"],
      default: "info",
    },
    isSeen: {
      type: Boolean,
      default: false,
    },
    metadata: {
      type: Object,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
