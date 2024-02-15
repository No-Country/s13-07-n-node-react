import express from "express";
import {
  filterRol,
  postRol,
  updateRol,
  searchRol,
  activateRol,
  deactivateRol,
} from "../controllers/controllerRol.js";

export const routesRol = express();

routesRol.get("/", filterRol);
routesRol.post("/", postRol);
routesRol.put("/:id", updateRol);
routesRol.get("/search", searchRol);
routesRol.patch("/activate/:id", activateRol);
routesRol.patch("/deactivate/:id", deactivateRol);
