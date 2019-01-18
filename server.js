let app = require("express")();
let http = require("http").Server(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

http.listen(3000, () => {
  console.log("Server running on port 3000");
});
