const express = require("express");
const router = express.Router();
const {
  sendNotification,
  getUserNotifications,
  markAsSeen,
} = require("../controller/notification.controller");

router.post("/send-notification", sendNotification);
router.get("/notifications/:userId", getUserNotifications);
router.patch("/notifications/mark-seen/:id", markAsSeen);

module.exports = router;
