import express from "express";
import {
  activateUser,
  deactivatUser,
  filterUser,
  loginUser,
  postUser,
  updateUser,
} from "../controllers/controllerUser.js";
import { upload } from "../middlewares/muter.cjs";


export const routesUser = express();
routesUser.get("/", filterUser);
routesUser.post("/", upload, postUser);
routesUser.put("/:id", upload, updateUser);
routesUser.patch("/activate/:id", activateUser);
routesUser.patch("/deactivate/:id", deactivatUser);
routesUser.post("/login", loginUser)