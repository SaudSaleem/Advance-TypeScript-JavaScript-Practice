//var http = require('http');
const express = require("express");
const app = express();
app.use(express.json());
let userRoutes = require("./routes/userRoutes");
let bankInfoRoutes = require("./routes/bankInfoRoutes");
let contactInfoRoutes = require("./routes/contactInfoRoutes");
let orderRoutes = require("./routes/orderRoutes");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Practice project",
      version: "1.0.0",
      description: "Practice project API Docs"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./routes/*.js"]
};
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

const port = process.env.port || 3000;


app.get("/", (req, res) => {
  res.send("Hello World! This is root route");
});
app.use("/api/user", userRoutes);
app.use("/api/bankInfo", bankInfoRoutes);
app.use("/api/contactInfo", contactInfoRoutes);
app.use("/api/orderRoutes", orderRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
