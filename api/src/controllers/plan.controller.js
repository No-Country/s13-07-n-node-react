import {
  createPlan as createPlanService,
  getAllPlans as getAllPlansService,
  getPlanById as getPlanByIdService,
  updatePlanById as updatePlanByIdService,
  deletePlanById as deletePlanByIdService,
} from "../services/plan.service";

//Revisar respuesta de errores

export const createPlan = async (req, res) => {
  try {
    const { name, description, price, durationMonth } = req.body;
    const newPlan = await createPlanService(name, description, price, durationMonth);
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllPlans = async (req, res) => {
  try {
    const plans = await getAllPlansService();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPlanById = async (req, res) => {
  try {
    const { planId } = req.params;
    const plan = await getPlanByIdService(planId);
    res.json(plan);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updatePlanById = async (req, res) => {
  try {
    const { planId } = req.params;
    const { name, description, price, durationMonth } = req.body;
    const updatedPlan = await updatePlanByIdService(planId, name, description, price, durationMonth);
    res.json(updatedPlan);
  } catch (error) {
    // Manejar el error de alguna manera, por ejemplo, enviar una respuesta de error al cliente
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deletePlanById = async (req, res) => {
  try {
    const { planId } = req.params;
    const deletedPlan = await deletePlanByIdService(planId);
    res.json(deletedPlan);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
