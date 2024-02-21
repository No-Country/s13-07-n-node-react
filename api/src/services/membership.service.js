import Membresia from "../models/Membresia.js";

// Crear una nueva membresía
export const createMembresia = async (usuarioId, planId, fechaInicio, fechaFin) => {
  try {
    const nuevaMembresia = new Membresia({
      usuarioId,
      planActual: planId,
      fechaInicio,
      fechaFin,
    });
    const savedMembresia = await nuevaMembresia.save();
    return savedMembresia;
  } catch (error) {
    throw new Error(`Error al crear la membresía: ${error.message}`);
  }
};

// Obtener todas las membresías
export const getAllMembresias = async () => {
  try {
    const membresias = await Membresia.find();
    return membresias;
  } catch (error) {
    throw new Error(`Error al obtener las membresías: ${error.message}`);
  }
};

// Bbtener  membresía por ID
export const getMembresiaById = async (membresiaId) => {
  try {
    const membresia = await Membresia.findById(membresiaId);
    return membresia;
  } catch (error) {
    throw new Error(`Error al obtener la membresía: ${error.message}`);
  }
};

// Actualizar  membresía ID
export const updateMembresiaById = async (membresiaId, nuevoPlanId, nuevaFechaFin) => {
  try {
    const membresia = await Membresia.findById(membresiaId);
    if (!membresia) {
      throw new Error("No se encontró ninguna membresía con el ID proporcionado.");
    }

    membresia.planAnterior = membresia.planActual;  //se guarda plan actua, como plan anterior
    membresia.planActual = nuevoPlanId;   //planActual se reemplaza por el Nuevo plan
    membresia.fechaFin = nuevaFechaFin;   //se actualiza la fecha de fin del plan

    await membresia.save();
    return membresia;
  } catch (error) {
    throw new Error(`Error al actualizar la membresía: ${error.message}`);
  }
};

//Eliminar  membresía por ID
export const deleteMembresiaById = async (membresiaId) => {
  try {
    const deletedMembresia = await Membresia.findByIdAndDelete(membresiaId);
    return deletedMembresia;
  } catch (error) {
    throw new Error(`Error al eliminar la membresía: ${error.message}`);
  }
};

//Historial de planes
export const getHistorialPlanesById = async (membresiaId) => {
  try {
    const membresia = await Membresia.findById(membresiaId);
    if (!membresia) {
      throw new Error("No se encontró ninguna membresía con el ID proporcionado.");
    }
    const historialPlanes = membresia.historialPlanes;
    return historialPlanes;
  } catch (error) {
    throw new Error(`Error al obtener el historial de planes de la membresía: ${error.message}`);
  }
};
