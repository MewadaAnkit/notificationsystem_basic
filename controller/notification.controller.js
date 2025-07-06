const Notification = require("../models/notification.model");

exports.sendNotification = async (req, res) => {
  const { userId, title, message, type, metadata } = req.body;

  try {
    const notification = await Notification.create({
      userId,
      title,
      message,
      type,
      metadata,
    });

    // Emit to Socket.IO (user room)
    const io = req.app.get("socketio");
    io.to(userId).emit("newNotification", notification);

    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.markAsSeen = async (req, res) => {
  const { id } = req.params;

  try {
    const notif = await Notification.findByIdAndUpdate(id, { isSeen: true }, { new: true });
    res.json(notif);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
