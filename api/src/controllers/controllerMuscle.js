import { activeMuscleService, desactivedMuscleService, getMuscle, postMuscle, putMuscle } from "../services/muscle.services.js";

export const filterMuscle = async (req, res) => {
  return res.json({ muscle: await getMuscle(req.query) });
};

export const createMuscle = async (req, res) => {
  return res.json({ muscle: await postMuscle(req.body) });
};

export const updatedMuscle = async (req, res) => {
  return res.json({ muscle: await putMuscle(req.params.id, req.body) });
};

export const activeMuscle = async (req, res) => {
  return res.json({ muscle: await activeMuscleService(req.params.id) });
};
export const desactiveMuscle = async (req, res) => {
    return res.json({ muscle: await desactivedMuscleService(req.params.id) });
  };
  