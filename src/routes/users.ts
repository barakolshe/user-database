import express, { Request, Response } from "express";
import {
  getUserByEmail,
  getUserByName,
  paginateUsers,
  patchStatuses,
} from "../controllers/users";

const userRouter = express.Router();

userRouter.get("/name/:name", (req: Request, res: Response) => {
  getUserByName(req, res);
});

userRouter.get("/email/:email", (req: Request, res: Response) => {
  getUserByEmail(req, res);
});

userRouter.get("/paginate", (req: Request, res: Response) => {
  paginateUsers(req, res);
});

userRouter.patch("/status", (req: Request, res: Response) => {
  patchStatuses(req, res);
});

export { userRouter };
