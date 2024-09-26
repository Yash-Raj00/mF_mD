require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { getStoriesRouter } from "./api";

const app = express();

// Middlewares
app.use(cors({
  origin: "https://mf-md-achs.onrender.com"
}
))
app.options('*', cors())
app.use(express.json());

const port = process.env.APP_PORT || 3001;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

// Routes
app.use("/api", getStoriesRouter);

// Error handling
app.all("*", (_req: Request, res: Response) =>
  res.status(404).send("Route does not exists")
);

export default app;