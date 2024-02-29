import { activity } from "../db/schemas/activity.schema.js";
import pkg from "http-status";

const { NOT_FOUND, CREATED, OK } = pkg;

export const activityServicePost = async (body) => {
  const { name, description, start_time, finish_time, price } = body;

  const newActivity = new activity({
    name,
    description,
    start_time,
    finish_time,
    price,
  });

  await newActivity.save();

  return {
    status: CREATED,
    message: "Actividad creada correctamente",
    activity: newActivity,
  };
};

export const activityServiceList = async () => {
  const activities = await activity.find();
  if (activities.length === 0) {
    return {
      status: NOT_FOUND,
      message: "No se encontraron actividades",
      activities: [],
    };
  }
  return {
    status: OK,
    message: "Lista de actividades obtenida correctamente",
    activities: activities,
  };
};

export const activityServiceFilter = async (name) => {
  if (name) {
    const regex = new RegExp(name, "i");
    return await activity.find({ name: regex });
  }
  return await activity.find();
};

export const activityServiceUpdate = async (body, id) => {
  const updateActivity = await activity.findByIdAndUpdate(id, body, { new: true });

  if (!updateActivity) {
    return {
      status: NOT_FOUND,
      message: "Actividad no encontrada",
    };
  }

  return {
    status: OK,
    message: "Actividad actualizada correctamente",
    updateActivity: updateActivity,
  };
};
