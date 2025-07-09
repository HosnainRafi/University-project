import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

import { StudentRoutes } from "./modules/student/student.route";
import { UserRoutes } from "./modules/user/user.route";
import { globalErrorHandler } from "./middlewares/globalErrorandler";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", UserRoutes);
app.use("/api/students", StudentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the PH university backend");
});

app.use(globalErrorHandler);

export default app;
