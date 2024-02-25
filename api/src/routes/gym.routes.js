import { Router } from "express";
import { filterGym, postGym, updateGym, activateGym, deactivateGym, listGym } from "../controllers/gym.controller.js";

const router = Router();

router.get("/", listGym);
router.get("/search", filterGym);
router.post("/", postGym);
router.put("/:id", updateGym);
router.patch("/activate/:id", activateGym);
router.patch("/deactivate/:id", deactivateGym);

export default router;
