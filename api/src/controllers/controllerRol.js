import pkg from "http-status";
import {
  rolServiceFilter,
  rolServicePost,
  rolServiceUpdate,
  rolServiceActive,
  rolServiceDeactivate,
} from "../services/rol.services.js";
const { OK } = pkg;
export const filterRol = async (req, res) => {
  const { name } = req.query;
  return res.json({ rol: await rolServiceFilter(name), status: OK });
};

export const postRol = async (req, res) => {
  const rol = await rolServicePost(req.body);
  res.json(rol);
};

export const updateRol = async (req, res) => {
  const rol = await rolServiceUpdate(req.body, req.params.id);
  res.json(rol);
};

export const activateRol = async (req, res) => {
  const rol = await rolServiceActive(req.params.id);
  res.json(rol);
};

export const deactivateRol = async (req, res) => {
  const rol = await rolServiceDeactivate(req.params.id);
  res.json(rol);
};
