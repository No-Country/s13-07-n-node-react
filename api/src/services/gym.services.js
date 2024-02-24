import { gym } from "../db/schemas/gym.schema.js";
import pkg from "http-status";

const { NOT_FOUND, CREATED, OK } = pkg;

export const gymServiceList = async () => {
  const gyms = await gym.find();
  if (gyms.length === 0) {
    return {
      status: NOT_FOUND,
      message: "No se encontraron gimnasios",
      gyms: [],
    };
  }
  return {
    status: OK,
    message: "Lista de gimnasios obtenida correctamente",
    gyms: gyms,
  };
};

export const gymServiceFilter = async (name) => {
  if (name) {
    const regex = new RegExp(name, "i");
    return await gym.find({ name: regex });
  }
  return await gym.find();
};

export const gymServicePost = async (body) => {
  const { name, address } = body;

  const search = await gym.findOne({ name });

  if (search) {
    return {
      status: NOT_FOUND,
      message: "Gym no encontrado",
    };
  }

  const newGym = await gym.create({ name: name.toLowerCase(), address });

  await newGym.save();

  return {
    status: CREATED,
    message: "Gym creado correctamente",
  };
};

export const gymServiceUpdate = async (body, id) => {
  const updatedGym = await gym.findByIdAndUpdate(id, body, { new: true });

  if (!updatedGym) {
    return {
      status: NOT_FOUND,
      message: "Gimnasio no encontrado",
    };
  }

  return {
    status: OK,
    message: "Gimnasio actualizado correctamente",
    updatedGym: updatedGym,
  };
};

export const gymServiceActive = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "gym no encontrado",
    };
  }
  const search = await gym.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "gym no encontrado",
    };
  } else {
    if (!search.active) {
      search.active = true;
      search.save();
      return {
        status: OK,
        message: "gym activado",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "El gym se encuentra activado",
      };
    }
  }
};

export const gymServiceDeactivate = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "gym no encontrado",
    };
  }
  const search = await gym.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "gym no encontrado",
    };
  } else {
    if (search.active) {
      search.active = false;
      search.save();
      return {
        status: OK,
        message: "gym desactivado",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "El gym ya se encuentra desactivado",
      };
    }
  }
};
