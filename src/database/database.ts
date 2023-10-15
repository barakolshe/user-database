import { Sequelize } from "sequelize";

const dbClient = new Sequelize("main", "root", "123", {
  host: "localhost",
  dialect: "mysql",
});

export default dbClient;
