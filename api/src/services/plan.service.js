import Plan from "../models/Plan.js";

// Crear plan
export const createPlan = async (name, description, price, durationMonth) => {
  try {
    //Validaciones
    if (!name || !price || !description) {
      throw new Error("El nombre, precio y duración en meses son campos obligatorios.");
    }

    if (typeof name !== "string") {
      throw new Error("El nombre debe ser una cadena de caracteres.");
    }

    if (typeof price !== "number" || price <= 0) {
      throw new Error("El precio debe ser un Numero mayor a 0.");
    }

    if (typeof durationMonth !== "number" || durationMonth <= 0) {
      throw new Error("La duración en meses debe ser un NUMERO mayor a 0.");
    }

    //creacion de plan
    const newPlan = new Plan({
      name,
      description,
      price,
      durationMonth,
    });
    const savedPlan = await newPlan.save();
    return savedPlan;
  } catch (error) {
    throw new Error(`Error al crear el plan: ${newPlan.name}`);
  }
};

//obtener todos los planes (Revisar)
export const getAllPlans = async () => {
    try {
      const plans = await Plan.find();
      return plans;
    } catch (error) {
      throw new Error(`Error al obtener los planes: ${error.message}`);
    }
  };
  
  // Obtener plan por Id (revisar)
  export const getPlanById = async (planId) => {
    try {
      const plan = await Plan.findById(planId);
      if (!plan) {
        throw new Error("No se encontró ningún plan con el ID proporcionado.");
      }
      return plan;
    } catch (error) {
      throw new Error(`Error al obtener el plan: ${error.message}`);
    }
  };
  
  //    Actualizar Plan
  export const updatePlanById = async (planId, name, description, price, durationMonth) => {
    try {
      const updatedPlan = await Plan.findByIdAndUpdate(
        planId,
        { name, description, price, durationMonth },
        { new: true }
      );
      if (!updatedPlan) {
        throw new Error("No se encontró ningún plan con el ID proporcionado.");
      }
      return updatedPlan;
    } catch (error) {
      throw new Error(`Error al actualizar el plan: ${error.message}`);
    }
  };
  
  // Eliminar plan por ID
  export const deletePlanById = async (planId) => {
    try {
      const deletedPlan = await Plan.findByIdAndDelete(planId);
      if (!deletedPlan) {
        throw new Error("No se encontró ningún plan con el ID proporcionado.");
      }
      return deletedPlan;
    } catch (error) {
      throw new Error(`Error al eliminar el plan: ${error.message}`);
    }
  };
