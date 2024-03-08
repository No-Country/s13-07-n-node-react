import express from "express";
import {
  filterExercise,
  postExercise,
  updateExercise,
  activateExercise,
  deactivateExercise,
} from "../controllers/controllerExercise.js";
import { multipleUpload } from "../middlewares/muter.cjs";
export const routesExercise = express();

routesExercise.get("/", filterExercise);
routesExercise.post("/", multipleUpload, postExercise);
routesExercise.put("/:id", multipleUpload, updateExercise);
routesExercise.patch("/activate/:id", activateExercise);
routesExercise.patch("/deactivate/:id", deactivateExercise);
