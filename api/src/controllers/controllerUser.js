import pkg from "http-status";
import {
  userServiceFilter,
  userServicePost,
  userServiceUpdate,
  userServiceActive,
  userServiceDeactivate,
  userServiceLogin,
} from "../services/user.services.js";
const { OK } = pkg;
export const filterUser = async (req, res) => {
  const { firstName, lastName, phone, email, role_id } = req.query;
  return res.json({ user: await userServiceFilter(firstName, lastName, phone, email, role_id), status: OK });
};

export const postUser = async (req, res) => {
  const user = await userServicePost(req.body, req.file?.path);
  res.json(user);
};

export const updateUser = async (req, res) => {
  if (req.file) {
    const user = await userServiceUpdate(req.body, req.params.id, req.file.path);
    res.json(user);
  } else {
    const user = await userServiceUpdate(req.body, req.params.id);
    res.json(user);
  }
};

export const activateUser = async (req, res) => {
  const user = await userServiceActive(req.params.id);
  res.json(user);
};

export const deactivatUser = async (req, res) => {
  const user = await userServiceDeactivate(req.params.id);
  res.json(user);
};

export const loginUser = async (req, res) => {
  const { email, pass } = req.body;
  const user = await userServiceLogin(email, pass);
  res.json(user);
};
