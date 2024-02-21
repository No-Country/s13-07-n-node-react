import { Router } from "express";
import { Instructors } from './instructors.routes.js'
import routineRoutes from "./routine.routes.js";
import TypeRoutineRoutes from "./typeRoutine.routes.js";
import clientRoutes from "./client.routes.js";
import ImageRoutes from "./image.routes.js";
import { routesRol } from "./rol.routes.js";
import { routesUser } from "./user.routes.js";
import { routesExercise } from "./exercise.routes.js";
const router = Router();
router.use("/routine", routineRoutes);
router.use("/typeRoutines", TypeRoutineRoutes);
//Ruta de Clientes
router.use("/clients", clientRoutes);
// Ruta de Imagenes
router.use("/images", ImageRoutes);
router.use("/rol", routesRol);
router.use("/user", routesUser);
router.use("/exercise", routesExercise);

// Instructors routes
Instructors.config( router )

export default router;
