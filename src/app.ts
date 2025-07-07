import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./modules/user/user.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the User & Order Management API!");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: "Something went wrong",
    error: err?.message || "Unknown error",
  });
});

export default app;
