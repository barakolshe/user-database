import { DataTypes } from "sequelize";
import dbClient from "../database/database";
import { GroupStatus } from "../types/GroupStatus.interface";

const Group = dbClient.define(
  "Group",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM<GroupStatus>("empty", "notEmpty"),
    },
  },
  {}
);

export { Group };
