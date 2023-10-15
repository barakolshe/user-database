import {
  StatusUpdate,
  dbGetAllUsers,
  getUsersWithPagination,
  updateMultiUserMultiStatus,
} from "../database/features/users";
import { Request, Response } from "express";

export const getUserByName = async (req: Request, res: Response) => {
  const { name } = req.query;
  if (name === undefined) {
    res.status(404);
    res.send("Invalid input");
  }

  try {
    const users = await dbGetAllUsers({
      name: {
        value: req.params.name,
        exact: false,
      },
    });
    res.send(users);
  } catch (e) {
    res.status(404);
    res.send("error");
  }
};

export const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.query;
  if (email === undefined) {
    res.status(404);
    res.send("Invalid input");
  }

  try {
    const users = await dbGetAllUsers({
      email: {
        value: req.params.email,
        exact: false,
      },
    });
    res.send(users);
  } catch (e) {
    res.status(404);
    res.send("error");
  }
};

export const paginateUsers = async (req: Request, res: Response) => {
  let offset: number = -1,
    limit: number = -1;
  try {
    offset = parseInt(req.query.offset!.toString(), 10);
    limit = parseInt(req.query.limit!.toString(), 10);
  } catch (e) {
    res.status(404);
    res.send("Invalid input");
  }

  try {
    const users = await getUsersWithPagination(offset, limit);
    res.send(users);
  } catch (e) {
    res.status(404);
    res.send("error");
  }
};

// TODO - Validate input
export const patchStatuses = async (req: Request, res: Response) => {
  let statusUpdates: StatusUpdate[] = [];

  try {
    statusUpdates = req.body;
  } catch (e) {
    res.status(404);
    res.send("Invalid input");
  }

  try {
    await updateMultiUserMultiStatus(statusUpdates);
    res.send("Success");
  } catch (e) {
    res.status(404);
    res.send("error");
  }
};
