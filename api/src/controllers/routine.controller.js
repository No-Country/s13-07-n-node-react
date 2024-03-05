import {
  createRoutineService,
  getAllRoutinesService,
  deactivateRoutineService,
  activateRoutineService,
  updateRoutineService,
  searchRoutineByNameService,
  selectRoutine,
  completeRoutine,
} from "../services/routine.services.js";

// crear una nueva rutina
export const createRoutine = async (req, res) => {
  try {
    const { idClient, idTypeRoutine, idUser, name, list_exercise, times } = req.body;
    const newRoutine = await createRoutineService(idClient, idTypeRoutine, idUser, name, list_exercise, times);
    res.status(201).json(newRoutine);
  } catch (error) {
    console.error("Error creating routine:", error);
    res.status(500).json({ message: "Error creating routine" });
  }
};

//  desactivar una rutina
export const deactivateRoutine = async (req, res) => {
  try {
    const { routineId } = req.params;
    const deactivatedRoutine = await deactivateRoutineService(routineId);
    res.json(deactivatedRoutine);
  } catch (error) {
    console.error("Error deactivating routine:", error);
    res.status(500).json({ message: "Error deactivating routine" });
  }
};

//  activar una rutina
export const activateRoutine = async (req, res) => {
  try {
    const { routineId } = req.params;
    const activatedRoutine = await activateRoutineService(routineId);
    res.json(activatedRoutine);
  } catch (error) {
    console.error("Error activating routine:", error);
    res.status(500).json({ message: "Error activating routine" });
  }
};

//actualizar una rutina
export const updateRoutine = async (req, res) => {
  try {
    const { routineId } = req.params;
    const updatedRoutine = await updateRoutineService(routineId, req.body);
    res.json(updatedRoutine);
  } catch (error) {
    console.error("Error updating routine:", error);
    res.status(500).json({ message: "Error updating routine" });
  }
};

// obtener todas las rutinas
export const getAllRoutines = async (req, res) => {
  try {
    const routines = await getAllRoutinesService();
    res.json(routines);
  } catch (error) {
    console.error("Error getting all routines:", error);
    res.status(500).json({ message: "Error getting all routines" });
  }
};

//buscar rutinas por nombre
export const searchRoutineByName = async (req, res) => {
  try {
    const { routineName } = req.query;
    const routines = await searchRoutineByNameService(routineName);
    res.json(routines);
  } catch (error) {
    console.error("Error searching routine by name:", error);
    res.status(500).json({ message: "Error searching routine by name" });
  }
};

export const SearchRoutine = async (req, res) => {
  const searchRoutines = await selectRoutine(req.params.idUser, req.params.idRutine, req.query.page);
  res.json(searchRoutines);
};

export const CompleteRoutine = async (req, res) => {
  const addRoutines = await completeRoutine(req.body);
  res.json(addRoutines);
};
