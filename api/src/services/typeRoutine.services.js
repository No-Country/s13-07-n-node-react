import TypeRoutine from "../schemas/typeRoutine.schema.js";

// Crear un nuevo TypeRoutine en la base de datos
export const createTypeRoutineService = async (name) => {
  try {
    const newTypeRoutine = new TypeRoutine({ name });
    const savedTypeRoutine = await newTypeRoutine.save();
    return savedTypeRoutine;
  } catch (error) {
    throw new Error("Error creating TypeRoutine: " + error.message);
  }
};

// Actualizar un TypeRoutine existente en la base de datos
export const updateTypeRoutineService = async (typeRoutineId, updatedFields) => {
  try {
    const updatedTypeRoutine = await TypeRoutine.findByIdAndUpdate(typeRoutineId, updatedFields, { new: true });
    return updatedTypeRoutine;
  } catch (error) {
    throw new Error("Error updating TypeRoutine: " + error.message);
  }
};

// Desactivar un TypeRoutine cambiando su estado a inactivo en la base de datos
export const deactivateTypeRoutineService = async (typeRoutineId) => {
  try {
    const deactivatedTypeRoutine = await TypeRoutine.findByIdAndUpdate(typeRoutineId, { isActive: false });
    return deactivatedTypeRoutine;
  } catch (error) {
    throw new Error("Error deactivating TypeRoutine: " + error.message);
  }
};

// Activar un TypeRoutine cambiando su estado a activo en la base de datos
export const activateTypeRoutineService = async (typeRoutineId) => {
  try {
    const activatedTypeRoutine = await TypeRoutine.findByIdAndUpdate(typeRoutineId, { isActive: true });
    return activatedTypeRoutine;
  } catch (error) {
    throw new Error("Error activating TypeRoutine: " + error.message);
  }
};

// Obtener todos los TypeRoutine de la base de datos
export const getAllTypeRoutinesService = async () => {
  try {
    const typeRoutines = await TypeRoutine.find();
    return typeRoutines;
  } catch (error) {
    throw new Error("Error getting all TypeRoutines: " + error.message);
  }
};

// Buscar un TypeRoutine por su nombre en la base de datos
export const searchTypeRoutineByNameService = async (name) => {
  try {
    const regex = new RegExp(name, "i");
    const typeRoutines = await TypeRoutine.find({ name: regex });
    return typeRoutines;
  } catch (error) {
    throw new Error("Error searching TypeRoutine by name: " + error.message);
  }
};
