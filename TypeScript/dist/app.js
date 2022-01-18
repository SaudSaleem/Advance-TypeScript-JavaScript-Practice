"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myNumbers = void 0;
const express_1 = __importDefault(require("express"));
let userRoutes = require("./routes/userRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/user", userRoutes);
const port = process.env.port || 3000;
app.get("/", (req, res) => {
    res.send("Hello World! This is root route");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
console.log("HELLO FRIM INDEX JS");
exports.myNumbers = [1, 2, 3, 4];
