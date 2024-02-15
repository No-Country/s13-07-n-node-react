import { Router } from "express";
import {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
  loginClient,
} from "../controllers/client.controller.js";
import {
  createClientValidation,
  loginClientValidation,
  updateClientValidation,
} from "../middlewares/validation.middleware.js";

const router = Router();

// Rutas CRUD para clientes
router.post("/register", createClientValidation, createClient);
router.post("/login", loginClientValidation, loginClient);
router.get("/", getAllClients);
router.get("/:clientId", getClientById);
router.put("/:clientId", updateClientValidation, updateClient);
router.delete("/:clientId", deleteClient);

export default router;
