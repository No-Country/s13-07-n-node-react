import express from "express";
import "dotenv/config";
import { db } from "./db/connections.js";
import { config } from "./Middleware/middleware.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
const app = express();
config(app, [
  morgan("dev"),
  cors(),
  express.urlencoded({ extended: true }),
  express.json(),
  cookieParser(),
]);
db();
app.listen(process.env.PORT_SERVER, () => {
  console.log(`listening on ${process.env.PORT_SERVER}`);
});
