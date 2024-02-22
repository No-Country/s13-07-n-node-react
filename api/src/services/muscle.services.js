import pkg from "http-status";
import { muscle } from "../db/schemas/muscle.schema.js";
const { OK, NOT_FOUND, CREATED } = pkg;

export const getMuscle = async (query) => {
  const { name, typeMuscle } = query;
  if (name || typeMuscle) {
    return {
      status: OK,
      muscle: await muscle
        .find({ $or: [{ name: name.toLowerCase() }, { typeMuscle: typeMuscle.toLowerCase() }] })
        .exec(),
    };
  }
  return {
    status: OK,
    muscle: await muscle.find().exec(),
  };
};

export const postMuscle = async (body) => {
  const { name, typeMuscle } = body;
  if (!name) {
    return {
      status: NOT_FOUND,
      message: "Ingrese el nombre del musculo",
    };
  }
  if (!typeMuscle) {
    return {
      status: NOT_FOUND,
      message: "Ingrese el tipo del musculo",
    };
  }
  const search = await muscle.findOne({ name: name.toLowerCase() }).exec();
  if (search) {
    return {
      status: NOT_FOUND,
      message: "El musculo ya se encuentra registrado",
    };
  }
  const createMuscle = await muscle.create({ name: name.toLowerCase(), typeMuscle: typeMuscle.toLowerCase() });
  createMuscle.save();
  return {
    status: CREATED,
    message: "Musculo se creo correctamente",
  };
};

export const putMuscle = async (id, body) => {
  const search = await muscle.findOne({ _id: id }).exec();
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "musculo no encontrado",
    };
  }
  const { name, typeMuscle } = body;

  if (!name && !typeMuscle) {
    return {
      status: NOT_FOUND,
      message: "Ingrese el nombre o typeMuscle a modificar el nombre",
    };
  }

  if (name) {
    search.name = name.toLowerCase();
  }

  if (typeMuscle) {
    search.typeMuscle = typeMuscle.toLowerCase();
  }
  search.save();
};

export const activeMuscleService = async (id) => {
  const search = await muscle.findOne({ _id: id }).exec();
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "no se encontro el musculo activar",
    };
  }
  if (search.active) {
    return {
      status: NOT_FOUND,
      message: "el musculo ya se encuentra activo",
    };
  }
  search.active = true;
  search.save();
  return {
    status: OK,
    message: "musculo activado correctamente",
  };
};
export const desactivedMuscleService = async (id) => {
  const search = await muscle.findOne({ _id: id }).exec();
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "no se encontro el musculo a desactivar",
    };
  }
  if (!search.active) {
    return {
      status: NOT_FOUND,
      message: "el musculo ya se encuentra desactivado",
    };
  }
  search.active = false;
  search.save();
  return {
    status: OK,
    message: "musculo desactivado correctamente",
  };
};
