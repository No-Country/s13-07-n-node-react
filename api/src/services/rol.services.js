import { rol } from "../db/schemas/rol.schema.js";
import pkg from "http-status";
const { NOT_FOUND, CREATED, OK } = pkg;
export const rolServiceFilter = async (name) => {
  if (name) {
    return await rol.find({ name: name?.toLowerCase() });
  }
  return await rol.find();
};

export const rolServicePost = async (body) => {
  const { name } = body;
  const search = await rol.findOne({ name });
  if (search) {
    return {
      status: NOT_FOUND,
      message: "Rol no encontrado",
    };
  }
  const rolCreate = await rol.create({ name: name.toLowerCase() });
  rolCreate.save();
  return {
    status: CREATED,
    message: "Rol creado correctamente",
  };
};

export const rolServiceUpdate = async (body, id) => {
  const { name } = body;
  const search = await rol.findOne({ _id: id });
  const searchdate = await rol.findOne({ name: name.toLowerCase() });
  if (searchdate) {
    return {
      status: NOT_FOUND,
      message: "El rol no se puede actualizar el nombre ingresado ya se encuentra registrado",
    };
  }
  if (search) {
    await rol.findOneAndUpdate({ _id: id }, { name: name.toLowerCase() });
    return {
      status: OK,
      message: "Rol actualizado correctamente",
    };
  } else {
    return {
      status: NOT_FOUND,
      message: "Rol no encontrado",
    };
  }
};

export const rolServiceActive = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "Rol no encontrado",
    };
  }
  const search = await rol.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "Rol no encontrado",
    };
  } else {
    if (!search.active) {
      search.active = true;
      search.save();
      return {
        status: OK,
        message: "Rol activado",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "El rol se encuentra activado",
      };
    }
  }
};

export const rolServiceDeactivate = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "Rol no encontrado",
    };
  }
  const search = await rol.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "Rol no encontrado",
    };
  } else {
    if (search.active) {
      search.active = false;
      search.save();
      return {
        status: OK,
        message: "Rol desactivado",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "El rol ya se encuentra desactivado",
      };
    }
  }
};
