"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = require("./api");
const app = (0, express_1.default)();
// Middlewares
app.use(cors());
app.use(express_1.default.json());
const port = process.env.APP_PORT || 3001;
app.get("/", (req, res, next) => {
    res.send("Hello World!");
});
// Routes
app.use("/api", api_1.getStoriesRouter);
// Error handling
app.all("*", (_req, res) => res.status(404).send("Route does not exists"));
exports.default = app;
