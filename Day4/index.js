//var http = require('http');
const express = require("express");
let userRoutes = require("./routes/userRoutes");
let bankInfoRoutes = require("./routes/bankInfoRoutes");

const app = express();
app.use(express.json());

const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello World! This is root route");
});
app.use("/api/user", userRoutes);
app.use("/api/bankInfo", bankInfoRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
