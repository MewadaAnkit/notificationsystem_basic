module.exports = (io) => {
    io.on("connection", (socket) => {
      console.log("New client connected:", socket.id);
  
      const userId = socket.handshake.query.userId;
      if (userId) {
        socket.join(userId); // join user's private room
        console.log(`User ${userId} joined their private room.`);
      }
  
      socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
      });
    });
  };
  