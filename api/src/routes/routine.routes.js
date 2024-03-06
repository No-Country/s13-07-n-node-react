import { Router } from "express";
import {
  createRoutine,
  activateRoutine,
  updateRoutine,
  deactivateRoutine,
  getAllRoutines,
  searchRoutineByName,
} from "../controllers/routine.controller.js";
const router = Router();

//Rutas CRUD para routine
import { upload } from "../middlewares/muter.cjs";
router.post("/create", upload, createRoutine);
router.put("/deactivate/:routineId", deactivateRoutine);
router.put("/activate/:routineId", activateRoutine);
router.put("/update/:routineId", updateRoutine);
router.get("/all", getAllRoutines);
router.get("/search", searchRoutineByName);

export default router;
