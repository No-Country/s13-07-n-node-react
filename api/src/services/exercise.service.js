import { exercise } from "../db/schemas/exercise.schema.js";
import pkg from "http-status";
const { NOT_FOUND, CREATED, OK } = pkg;
export const exerciseServiceFilter = async (name) => {
  if (name) {
    return await exercise.find({ name }).exec();
  }
  return await exercise.find().exec();
};

export const exerciseServicePost = async (body) => {
  const { name } = body;

  if (!name || name == "") {
    return {
      status: NOT_FOUND,
      message: "Complete el campo nombre",
    };
  }

  const search = await exercise.findOne({ name });
  if (search) {
    return {
      status: NOT_FOUND,
      message: "Error el ejercicio ya existe",
    };
  }
  const exerciseCreate = await exercise.create({ name: name.toLowerCase() });
  exerciseCreate.save();
  return {
    status: CREATED,
    message: "successfully created exercise",
  };
};

export const exerciseServiceUpdate = async (body, id) => {
  const { name } = body;
  if (!name || name == "") {
    return {
      status: NOT_FOUND,
      message: "Complete el nombre del campo",
    };
  }
  const search = await exercise.findOne({ _id: id });
  if (search) {
    await exercise.findOneAndUpdate({ _id: id }, { name: name.toLowerCase() });
    return {
      status: OK,
      message: "Ejercicio actualizado correctamente",
    };
  } else {
    return {
      status: NOT_FOUND,
      message: "Ejercicio no encontrado",
    };
  }
};

export const exerciseServiceActive = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "Ejercicio no encontrado",
    };
  }
  const search = await exercise.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "Ejercicio no encontrado",
    };
  } else {
    if (!search.active) {
      search.active = true;
      search.save();
      return {
        status: OK,
        message: "Ejercicio activado",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "El ejercicio fue activado correctamente",
      };
    }
  }
};

export const exerciseServiceDeactivate = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "Ejercicio no encontrado",
    };
  }
  const search = await exercise.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "Ejercicio no encontrado",
    };
  } else {
    if (search.active) {
      search.active = false;
      search.save();
      return {
        status: OK,
        message: "Ejercicio desactivado",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "El ejercicio ya se encuentra activado",
      };
    }
  }
};
