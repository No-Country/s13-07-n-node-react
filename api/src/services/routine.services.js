import Routine from "../schemas/routine.schema.js";

// Alta Routine (Crear Routine)
export const createRoutineService = async (idClient, idTypeRoutine, idUser) => {
  try {
    const newRoutine = new Routine({
      idClient,
      idTypeRoutine,
      idUser,
    });

    const savedRoutine = await newRoutine.save();
    return savedRoutine;
  } catch (error) {
    throw new Error("Error creating routine: " + error.message);
  }
};

// Desactivar Routine
export const deactivateRoutineService = async (routineId) => {
  try {
    const deactivatedRoutine = await Routine.findByIdAndUpdate(routineId, { isActive: false });
    return deactivatedRoutine;
  } catch (error) {
    throw new Error("Error deactivating routine: " + error.message);
  }
};

// Activar Routine
export const activateRoutineService = async (routineId) => {
  try {
    const activatedRoutine = await Routine.findByIdAndUpdate(routineId, { isActive: true });
    return activatedRoutine;
  } catch (error) {
    throw new Error("Error activating routine: " + error.message);
  }
};

// Modificar Routine (Actualizar Routine)
export const updateRoutineService = async (routineId, updatedFields) => {
  try {
    const updatedRoutine = await Routine.findByIdAndUpdate(routineId, updatedFields, { new: true });
    return updatedRoutine;
  } catch (error) {
    throw new Error("Error updating routine: " + error.message);
  }
};

// Listar Routine
export const getAllRoutinesService = async () => {
  try {
    const routines = await Routine.find();
    return routines;
  } catch (error) {
    throw new Error("Error getting all routines: " + error.message);
  }
};

// Buscar Routine (por nombre)
export const searchRoutineByNameService = async (routineName) => {
  try {
    const regex = new RegExp(routineName, "i");
    const routines = await Routine.find({ name: regex });
    return routines;
  } catch (error) {
    throw new Error("Error searching routine by name: " + error.message);
  }
};
