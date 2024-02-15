import { Router } from "express";
import routineRoutes from "./routine.routes.js";
import TypeRoutineRoutes from "./typeRoutine.routes.js";
import clientRoutes from "./client.routes.js";
import ImageRoutes from "./image.routes.js";
const router = Router();
router.use("/routine", routineRoutes);
router.use("/typeRoutines", TypeRoutineRoutes);
//Ruta de Clientes
router.use("/clients", clientRoutes);
// Ruta de Imagenes
router.use("/images", ImageRoutes);
export default router;
