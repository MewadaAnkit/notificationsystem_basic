// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
} = require("../controller/user.controller");

router.post("/create", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);

module.exports = router;
