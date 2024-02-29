import cloudinary from "../config/cloudinary/cloudinary-config.js";
import { exercise } from "../db/schemas/exercise.schema.js";
import pkg from "http-status";
const { NOT_FOUND, CREATED, OK } = pkg;
export const exerciseServiceFilter = async (name) => {
  if (name) {
    return await exercise.find({ name }).exec();
  }
  return await exercise.find().populate("routines").exec();
};

export const exerciseServicePost = async (body, files) => {
  try {
    const { name, kcal, instructive, muscle_id } = body;

    if (!name || name == "") {
      return {
        status: NOT_FOUND,
        message: "Complete el campo nombre",
      };
    }
    if (!kcal || kcal == "") {
      return {
        status: NOT_FOUND,
        message: "Ingrese el promedio de caloria que quema el ejercicio",
      };
    }
    if (!instructive || instructive == "") {
      return {
        status: NOT_FOUND,
        message: "Ingrese el instructivo como se hace el ejercicio",
      };
    }

    if (!files || files.length <= 1) {
      return {
        status: NOT_FOUND,
        message: "Ingrese la imagen y el video del ejercicio",
      };
    }

    if (!muscle_id || muscle_id == "") {
      return {
        status: NOT_FOUND,
        message: "Seleccione el tipo de musculo que trabaja el ejercicio",
      };
    }

    const search = await exercise.findOne({ name });
    if (search) {
      return {
        status: NOT_FOUND,
        message: "Error el ejercicio ya existe",
      };
    }
    let video;
    let image;
    for (const file of files) {
      const { path } = file;
      if (path) {
        if (file.mimetype.includes("video")) {
          const upload = await cloudinary.uploader.upload(file["path"], { resource_type: "video" });
          video = upload["url"];
        } else {
          if (file.mimetype.includes("image")) {
            const upload = await cloudinary.uploader.upload(file["path"], { resource_type: "image" });
            image = upload["url"];
          } else {
            return "Ingrese solo imagenes o video";
          }
        }
      }
    }
    const exerciseCreate = await exercise.create({
      name: name.toLowerCase(),
      kcal: kcal,
      instructive: instructive.toLowerCase(),
      muscle_id: muscle_id,
      video: video || null,
      image: image || null,
    });
    exerciseCreate.save();
    return {
      status: CREATED,
      message: "successfully created exercise",
    };
  } catch (error) {
    console.log(error);
  }
};

export const exerciseServiceUpdate = async (body, id, files) => {
  try {
    const { name, kcal, instructive, muscle_id } = body;
    const error = [];
    const objectUpdate = {};
    if (!name || name == "") {
      error.push("Complete el campo nombre");
    } else {
      objectUpdate["name"] = name;
    }
    if (!kcal || kcal == "") {
      error.push("Ingrese el promedio de caloria que quema el ejercicio");
    } else {
      objectUpdate["kcal"] = kcal;
    }
    if (!instructive || instructive == "") {
      error.push("Ingrese el instructivo de como se hace el ejercicio");
    } else {
      objectUpdate["instructive"] = instructive;
    }
    if (!files || files.length == 0) {
      error.push("Ingrese la imagen o el video del ejercicio");
    } else {
      for (const file of files) {
        if (file.mimetype.includes("video")) {
          const update = await cloudinary.uploader.upload(file["path"], { resource_type: "video" });
          objectUpdate["video"] = update["url"];
        } else {
          if (file.mimetype.includes("image")) {
            const update = await cloudinary.uploader.upload(file["path"], { resource_type: "image" });
            objectUpdate["image"] = update["url"];
          }
        }
      }
    }

    if (!muscle_id || muscle_id == "") {
      error.push("Seleccione el tipo de musculo que trabaja el ejercicio");
    } else {
      objectUpdate["muscle_id"] = instructive;
    }

    if (error.length > 0) {
      return {
        status: NOT_FOUND,
        message: error,
      };
    }
    const search = await exercise.findOne({ _id: id });
    if (search) {
      await exercise.findOneAndUpdate({ _id: id }, objectUpdate);
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
  } catch (error) {
    console.log(error);
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
