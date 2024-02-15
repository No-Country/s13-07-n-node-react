import express from "express";
import "dotenv/config";
import { db } from "./db/connections.js";
import { config } from "./middleware/middleware.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { routesRol } from "./routes/rol.routes.js";
import { routesUser } from "./routes/user.routes.js";
import { routesExercise } from "./routes/exercise.routes.js";
const app = express();
config(app, [
  morgan("dev"),
  cors(),
  express.urlencoded({ extended: true }),
  express.json(),
  cookieParser(),
]);
db();

app.use("/rol", routesRol);
app.use("/user", routesUser);
app.use("/exercise", routesExercise);
app.listen(process.env.PORT_SERVER, () => {
  console.log(`listening on ${process.env.PORT_SERVER}`);
});
