import express, { Request, Response, NextFunction } from "express";
let userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/api/user", userRoutes);

const port = process.env.port || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! This is root route");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

console.log("HELLO FRIM INDEX JS");



export const myNumbers = [1, 2, 3, 4];