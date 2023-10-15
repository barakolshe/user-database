import express, { Request, Response } from "express";
import { getGroup } from "../controllers/groups";

const groupRouter = express.Router();

groupRouter.get("/:groupId", (req: Request, res: Response) => {
  getGroup(req, res);
});

export { groupRouter };
