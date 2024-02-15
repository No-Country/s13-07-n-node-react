import express from "express";
import {
  filterExercise,
  postExercise,
  updateExercise,
  searchExercise,
  activateExercise,
  deactivateExercise,
} from "../controllers/controllerExercise.js";

export const routesExercise = express();

routesExercise.get("/", filterExercise);
routesExercise.post("/", postExercise);
routesExercise.put("/:id", updateExercise);
routesExercise.get("/search", searchExercise);
routesExercise.patch("/activate/:id", activateExercise);
routesExercise.patch("/deactivate/:id", deactivateExercise);
