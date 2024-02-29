import pkg from "http-status";
import {
  exerciseServiceFilter,
  exerciseServicePost,
  exerciseServiceUpdate,
  exerciseServiceActive,
  exerciseServiceDeactivate,
} from "../services/exercise.services.js";
const { OK } = pkg;
export const filterExercise = async (req, res) => {
  const { name } = req.query;
  return res.json({ exercise: await exerciseServiceFilter(name), status: OK });
};

export const postExercise = async (req, res) => {
  const exercise = await exerciseServicePost(req.body, req.files);
  res.json(exercise);
};

export const updateExercise = async (req, res) => {
  const exercise = await exerciseServiceUpdate(req.body, req.params.id, req.files);
  res.json(exercise);
};

export const activateExercise = async (req, res) => {
  const exercise = await exerciseServiceActive(req.params.id);
  res.json(exercise);
};

export const deactivateExercise = async (req, res) => {
  const exercise = await exerciseServiceDeactivate(req.params.id);
  res.json(exercise);
};
