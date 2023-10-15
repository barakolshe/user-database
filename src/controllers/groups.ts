import { Request, Response } from "express";
import { dbGetGroup } from "../database/features/groups";

export const getGroup = async (req: Request, res: Response) => {
  try {
    const group = await dbGetGroup(Number(req.params.groupId));
    res.send(group);
  } catch (e) {
    console.error(e);
    res.status(404);
    res.send("Error");
  }
};
