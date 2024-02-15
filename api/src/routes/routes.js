import { Router } from "express";
import clientRoutes from "./client.routes.js";
import ImageRoutes from "./image.routes.js";

const router = Router();

//Ruta de Clientes
router.use("/clients", clientRoutes);
// Ruta de Imagenes
router.use("/images", ImageRoutes);

export default router;
