let app = require("express")();
let http = require("http").Server(app);
let path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.normalize(__dirname + "/index.html"));
});

http.listen(3000, () => {
  console.log("Server running on port 3000");
});
