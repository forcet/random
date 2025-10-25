import express, { Request, Response, NextFunction } from "express";
import luckyRouter from "./routes/Lucky";

const app = express();
app.use(express.json());
app.use(luckyRouter);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Error interno" });
});

export default app;

