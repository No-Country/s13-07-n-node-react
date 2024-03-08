import {
  createTypeRoutineService,
  updateTypeRoutineService,
  deactivateTypeRoutineService,
  activateTypeRoutineService,
  getAllTypeRoutinesService,
  searchTypeRoutineByNameService,
} from "../services/typeRoutine.services.js";

// Crear un nuevo TypeRoutine
export const createTypeRoutine = async (req, res) => {
  try {
    const { name } = req.body;
    const newTypeRoutine = await createTypeRoutineService(name);
    res.status(201).json(newTypeRoutine);
  } catch (error) {
    console.error("Error creating TypeRoutine:", error);
    res.status(500).json({ message: "Error creating TypeRoutine" });
  }
};

// Actualizar un TypeRoutine existente
export const updateTypeRoutine = async (req, res) => {
  try {
    const { typeRoutineId } = req.params;
    const updatedTypeRoutine = await updateTypeRoutineService(typeRoutineId, req.body);
    res.json(updatedTypeRoutine);
  } catch (error) {
    console.error("Error updating TypeRoutine:", error);
    res.status(500).json({ message: "Error updating TypeRoutine" });
  }
};

// Desactivar un TypeRoutine
export const deactivateTypeRoutine = async (req, res) => {
  try {
    const { typeRoutineId } = req.params;
    const deactivatedTypeRoutine = await deactivateTypeRoutineService(typeRoutineId);
    res.json(deactivatedTypeRoutine);
  } catch (error) {
    console.error("Error deactivating TypeRoutine:", error);
    res.status(500).json({ message: "Error deactivating TypeRoutine" });
  }
};

// Activar un TypeRoutine
export const activateTypeRoutine = async (req, res) => {
  try {
    const { typeRoutineId } = req.params;
    const activatedTypeRoutine = await activateTypeRoutineService(typeRoutineId);
    res.json(activatedTypeRoutine);
  } catch (error) {
    console.error("Error activating TypeRoutine:", error);
    res.status(500).json({ message: "Error activating TypeRoutine" });
  }
};

// Obtener todos los TypeRoutines
export const getAllTypeRoutines = async (req, res) => {
  try {
    const typeRoutines = await getAllTypeRoutinesService();
    res.json(typeRoutines);
  } catch (error) {
    console.error("Error getting all TypeRoutines:", error);
    res.status(500).json({ message: "Error getting all TypeRoutines" });
  }
};

// Buscar TypeRoutine por nombre
export const searchTypeRoutineByName = async (req, res) => {
  try {
    const { name } = req.query;
    const typeRoutines = await searchTypeRoutineByNameService(name);
    res.json(typeRoutines);
  } catch (error) {
    console.error("Error searching TypeRoutine by name:", error);
    res.status(500).json({ message: "Error searching TypeRoutine by name" });
  }
};
