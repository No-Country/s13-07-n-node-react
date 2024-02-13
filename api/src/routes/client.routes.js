import { Router } from "express";
import {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/client.controller.js";
import { createClientValidation, updateClientValidation } from "../middlewares/validation.middleware.js";

const router = Router();

// Rutas CRUD para clientes
router.post("/", createClientValidation, createClient);
router.get("/", getAllClients);
router.get("/:clientId", getClientById);
router.put("/:clientId", updateClientValidation, updateClient);
router.delete("/:clientId", deleteClient);

export default router;
