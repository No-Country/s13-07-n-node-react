import pkg from "http-status";
import {
  exerciseServiceFilter,
  exerciseServicePost,
  exerciseServiceUpdate,
  exerciseServiceSearch,
  exerciseServiceActive,
  exerciseServiceDeactivate,
} from "../service/service.exercise.js";
const { OK } = pkg;
export const filterExercise = async (req, res) => {
  return res.json({ exercise: await exerciseServiceFilter(), status: OK });
};

export const postExercise = async (req, res) => {
  const exercise = await exerciseServicePost(req.body);
  res.json(exercise);
};

export const updateExercise = async (req, res) => {
  const exercise = await exerciseServiceUpdate(req.body, req.params.id);
  res.json(exercise);
};

export const searchExercise = async (req, res) => {
  const exercise = await exerciseServiceSearch(req.query.name);
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
