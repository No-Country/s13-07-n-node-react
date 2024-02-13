import { Router } from "express";
import  routineRoutes from "./routine.routes"
import TypeRoutineRoutes from "./typeRoutine.routes.js"

const router = Router()

router.use("/routine", routineRoutes)
router.use("/typeRoutines", TypeRoutineRoutes)

export default router