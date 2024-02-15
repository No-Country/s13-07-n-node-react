import { Router } from "express";
import {
  createTypeRoutine,
  updateTypeRoutine,
  deactivateTypeRoutine,
  activateTypeRoutine,
  getAllTypeRoutines,
  searchTypeRoutineByName,
} from "../controllers/typeRoutine.controller.js";

const router = Router();

router.post("/", createTypeRoutine);
router.put("/:typeRoutineId", updateTypeRoutine);
router.put("/deactivate/:typeRoutineId", deactivateTypeRoutine);
router.put("/activate/:typeRoutineId", activateTypeRoutine);
router.get("/", getAllTypeRoutines);
router.get("/search", searchTypeRoutineByName);

export default router;
