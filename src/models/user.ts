import { DataTypes } from "sequelize";
import dbClient from "../database/database";
import { UserStatus } from "../types/UserStatus.interface";
import { Group } from "./group";

const User = dbClient.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM<UserStatus>("pending", "active", "blocked"),
  },
  GroupId: {
    type: DataTypes.INTEGER,
    references: {
      model: Group,
      key: "id",
    },
  },
});

User.belongsTo(Group, { foreignKey: "GroupId" });

export { User };
