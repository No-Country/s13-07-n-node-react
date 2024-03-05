import { Router } from "express";
import {
  createRoutine,
  activateRoutine,
  updateRoutine,
  deactivateRoutine,
  getAllRoutines,
  searchRoutineByName,
  SearchRoutine,
  CompleteRoutine,
  resultRoutine,
} from "../controllers/routine.controller.js";
const router = Router();

//Rutas CRUD para routine

router.post("/create", createRoutine);
router.put("/deactivate/:routineId", deactivateRoutine);
router.put("/activate/:routineId", activateRoutine);
router.put("/update/:routineId", updateRoutine);
router.get("/all", getAllRoutines);
router.get("/search", searchRoutineByName);
router.get("/selectRoutine/:idUser/:idRutine", SearchRoutine);
router.post("/selectRoutine/create", CompleteRoutine);
router.get("/selectRoutine/create/:idUser/:idRutine", resultRoutine);

export default router;
