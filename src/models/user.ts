import { DataTypes } from "sequelize";
import dbClient from "../database/database";
import { Group } from "./group";
import { Status } from "../types/Status.interface";

const User = dbClient.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM<Status>("pending", "active", "blocked"),
    },
  },
  {}
);

User.hasOne(Group);

export { User };
