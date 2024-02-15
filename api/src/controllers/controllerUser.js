import pkg from "http-status";
import {
  userServiceFilter,
  userServicePost,
  userServiceUpdate,
  userServiceSearch,
  userServiceActive,
  userServiceDeactivate,
} from "../service/service.user.js";
const { OK } = pkg;
export const filterUser = async (req, res) => {
  return res.json({ user: await userServiceFilter(), status: OK });
};

export const postUser = async (req, res) => {
  const user = await userServicePost(req.body, req.file.path);
  res.json(user);
};

export const updateUser = async (req, res) => {
  if (req.file) {
    const user = await userServiceUpdate(
      req.body,
      req.params.id,
      req.file.path
    );
    res.json(user);
  } else {
    const user = await userServiceUpdate(req.body, req.params.id);
    res.json(user);
  }
};

export const searchUser = async (req, res) => {
  const user = await userServiceSearch(req.query.name);
  res.json(user);
};

export const activateUser = async (req, res) => {
  const user = await userServiceActive(req.params.id);
  res.json(user);
};

export const deactivatUser = async (req, res) => {
  const rol = await userServiceDeactivate(req.params.id);
  res.json(rol);
};
