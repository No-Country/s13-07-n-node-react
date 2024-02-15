import express from "express";
import {
  activateUser,
  deactivatUser,
  filterUser,
  postUser,
  searchUser,
  updateUser,
} from "../controllers/controllerUser.js";
import { upload } from "../Middleware/muter.cjs";

export const routesUser = express();
routesUser.get("/", filterUser);
routesUser.post("/", upload, postUser);
routesUser.put("/:id", upload, updateUser);
routesUser.get("/search", searchUser);
routesUser.patch("/activate/:id", activateUser);
routesUser.patch("/deactivate/:id", deactivatUser);
