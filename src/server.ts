import express, { Application } from "express";
import dbClient from "./database/database";
import { userRouter } from "./routes/users";
import { groupRouter } from "./routes/groups";

const app: Application = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  dbClient
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
      //   dbClient.sync();
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });
});

app.use(express.json());
app.use("/user", userRouter);
app.use("/group", groupRouter);

export default app;
