const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require("./config/db");
const notificationRoutes = require("./routes/notification.route");
const userRoutes  =  require('./routes/user.route')
const socketManager = require("./sockets/socketManager");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: { origin: "*" }
});

// Middlewares
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api", notificationRoutes);
app.use("/api/user", userRoutes);
// Socket.IO
socketManager(io);
app.set("socketio", io);

// Start
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
