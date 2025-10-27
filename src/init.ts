import express, { Request, Response, NextFunction } from "express";
import luckyRouter from "./routes/Lucky";
import health from "./routes/Health";
import start from "./routes/Start";
import readiness from "./routes/Readiness";

const app = express();
app.use(express.json());
app.use(luckyRouter);
app.use(health);
app.use(start);
app.use(readiness);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Error interno" });
});

export default app;

