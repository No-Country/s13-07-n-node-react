import express from "express";
import {
  activeMuscle,
  createMuscle,
  filterMuscle,
  updatedMuscle,
  desactiveMuscle,
} from "../controllers/controllerMuscle.js";

export const routesMuscle = express();

routesMuscle.get("/", filterMuscle);
routesMuscle.post("/", createMuscle);
routesMuscle.put("/:id", updatedMuscle);
routesMuscle.patch("/active/:id", activeMuscle);
routesMuscle.patch("/desactive/:id", desactiveMuscle);
