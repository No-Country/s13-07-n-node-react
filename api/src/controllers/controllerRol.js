import pkg from "http-status";
import {
  rolServiceFilter,
  rolServicePost,
  rolServiceUpdate,
  rolServiceSearch,
  rolServiceActive,
  rolServiceDeactivate,
} from "../services/service.rol.js";
const { OK } = pkg;
export const filterRol = async (req, res) => {
  return res.json({ rol: await rolServiceFilter(), status: OK });
};

export const postRol = async (req, res) => {
  const rol = await rolServicePost(req.body);
  res.json(rol);
};

export const updateRol = async (req, res) => {
  const rol = await rolServiceUpdate(req.body, req.params.id);
  res.json(rol);
};

export const searchRol = async (req, res) => {
  const rol = await rolServiceSearch(req.query.name);
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
