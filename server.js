let app = require("express")();
let http = require("http").Server(app);
let path = require("path");
let io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(path.normalize(__dirname + "/index.html"));
});

io.on("connection", socket => {
  socket.on("chat message", msg => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user has disconnected");
  });
});

http.listen(3000, () => {
  console.log("Server running on port 3000");
});
