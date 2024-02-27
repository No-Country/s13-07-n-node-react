import { Router } from "express";
import { listActivity, filterActivity, postActivity, updateActivity } from "../controllers/activity.controller.js";

const router = Router();

router.get("/", listActivity);
router.get("/search", filterActivity);
router.post("/", postActivity);
router.put("/:id", updateActivity);

export default router;
