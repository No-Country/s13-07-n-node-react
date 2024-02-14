import { Router } from "express";
import { uploadImage } from "../controllers/image.controller.js";
import { uploadImageValidation } from "../middlewares/validation.middleware.js";
import multer from "multer";

const router = Router();

// Configuración de multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), uploadImageValidation, uploadImage);

export default router;
