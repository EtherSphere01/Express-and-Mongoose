import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "UP" });
});

export default app;
