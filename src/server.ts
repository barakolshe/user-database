import express, { Express, Request, Response, Application } from "express";
import dbClient from "./database/database";
import { userRouter } from "./routes/users";
import { User } from "./models/user";
import { Group } from "./models/group";
import { dbAddUser } from "./database/features/users";

const app: Application = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
  dbClient
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
      //   dbClient.sync({});
      //   dbAddUser({
      //     name: "Josh",
      //     email: "josh@gmail.com",
      //     status: "pending",
      //   });
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });
});

app.use(express.json());
app.use("/user", userRouter);

export default app;
