import { Router } from "express";
import routineRoutes from "./routine.routes.js";
import TypeRoutineRoutes from "./typeRoutine.routes.js";
import gymRoutes from "./gym.routes.js";
import { routesRol } from "./rol.routes.js";
import { routesUser } from "./user.routes.js";
import { routesExercise } from "./exercise.routes.js";
import { routesMuscle } from "./muscle.routes.js";

const router = Router();

router.use("/routine", routineRoutes);
router.use("/typeRoutines", TypeRoutineRoutes);
router.use("/rol", routesRol);
router.use("/user", routesUser);
router.use("/exercise", routesExercise);
router.use("/gyms", gymRoutes);
router.use("/muscle",routesMuscle )

export default router;
