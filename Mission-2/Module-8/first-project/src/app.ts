import cors from "cors";
import express, { Application, Request, Response } from "express";
import { StudentRoutes } from "./app/modules/student/student.route";
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/students", StudentRoutes);

app.get("/", (req: Request, res: Response) => {
  const print = "Hello World!";
  res.send(print);
});

export default app;