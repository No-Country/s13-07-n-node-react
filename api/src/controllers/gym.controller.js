import pkg from "http-status";
import {
  gymServiceFilter,
  gymServicePost,
  gymServiceUpdate,
  gymServiceActive,
  gymServiceDeactivate,
  gymServiceList,
} from "../services/gym.services.js";

const { OK } = pkg;

export const listGym = async (req, res) => {
  const gymListResult = await gymServiceList();
  res.json(gymListResult);
};

export const filterGym = async (req, res) => {
  const { name } = req.query;
  return res.json({ status: OK, gym: await gymServiceFilter(name) });
};

export const postGym = async (req, res) => {
  const gym = await gymServicePost(req.body);
  res.json(gym);
};

export const updateGym = async (req, res) => {
  const gym = await gymServiceUpdate(req.body, req.params.id);
  res.json(gym);
};

export const activateGym = async (req, res) => {
  const gym = await gymServiceActive(req.params.id);

  res.json(gym);
};

export const deactivateGym = async (req, res) => {
  const gym = await gymServiceDeactivate(req.params.id);
  res.json(gym);
};
