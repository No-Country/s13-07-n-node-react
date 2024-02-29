import pkg from "http-status";
import {
  activityServiceList,
  activityServiceFilter,
  activityServicePost,
  activityServiceUpdate,
} from "../services/activity.service.js";

const { OK } = pkg;

export const listActivity = async (req, res) => {
  const activityListResult = await activityServiceList();
  res.json(activityListResult);
};

export const filterActivity = async (req, res) => {
  const { name } = req.query;
  return res.json({ status: OK, activity: await activityServiceFilter(name) });
};

export const postActivity = async (req, res) => {
  const activity = await activityServicePost(req.body);
  res.json(activity);
};

export const updateActivity = async (req, res) => {
  const activity = await activityServiceUpdate(req.body, req.params.id);
  res.json(activity);
};
