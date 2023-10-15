import { DataTypes } from "sequelize";
import dbClient from "../database/database";

const Group = dbClient.define(
  "Group",
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
      type: DataTypes.ENUM("empty", "notEmpty"),
    },
  },
  {}
);

export { Group };
