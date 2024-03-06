import pkg from "http-status";
import Routine from "../db/schemas/routine.schema.js";
import { exercise } from "../db/schemas/exercise.schema.js";
import { user } from "../db/schemas/user.schema.js";
import TypeRoutine from "../db/schemas/typeRoutine.schema.js";
import { pagination, search_routine } from "../function/Routine.js";
import { exercisePerformed } from "../db/schemas/exercisePerformed.js";
import { return_date } from "../function/initialDate.js";
import cloudinary from "../config/cloudinary/cloudinary-config.js";
const { CREATED, NOT_FOUND, OK } = pkg;
export const createRoutineService = async (idClient, idTypeRoutine, idUser, name, list_exercise, times, file) => {
  try {
    if (!idTypeRoutine || !idUser || !name || list_exercise.length == 0 || !times || !file) {
      return {
        status: NOT_FOUND,
        message: "Complete todos los campos",
      };
    }
    const imageUrl = await cloudinary.uploader.upload(file);
    const { url } = imageUrl;

    const newRoutine = new Routine({
      idTypeRoutine,
      idUser,
      name,
      image: url,
    });
    for (const exercises of list_exercise) {
      const object_new = {};
      const searchExercise = await exercise.findOne({ _id: exercises.exercise });
      if (searchExercise) {
        object_new["exercise"] = searchExercise;
        object_new["cant"] = exercises.cant;
        object_new["repetition"] = exercises.repetition;
        object_new["weight"] = exercises.weight;
        object_new["time"] = exercises.time;
        newRoutine.exercises.push(object_new);
        searchExercise.routines.push(newRoutine);
      }
      await searchExercise.save();
    }
    let client;
    if (idClient) {
      newRoutine.idClient = idClient;
      client = await user.findOne({ _id: idClient }).exec();
      if (client) {
        client.routines.push({ routinesDays: newRoutine._id, status: "pendiente" });
        await client.save();
      } else {
        return {
          status: NOT_FOUND,
          message: "Cliente no encontrado",
        };
      }
    }
    await newRoutine.save();

    const employeer = await user.findOne({ _id: idUser }).exec();
    employeer.routines.push({ routinesDays: newRoutine._id, status: "pendiente" });
    employeer.save();
    if (client) {
      return {
        status: CREATED,
        message: "rutina del cliente creada correctamente",
      };
    }
    return {
      status: CREATED,
      message: "rutina sugerida creada correctamente",
    };
  } catch (error) {
    throw new Error("Error creating routine: " + error.message);
  }
};

export const deactivateRoutineService = async (routineId) => {
  try {
    const deactivatedRoutine = await Routine.findByIdAndUpdate(routineId, { isActive: false });
    return deactivatedRoutine;
  } catch (error) {
    throw new Error("Error deactivating routine: " + error.message);
  }
};

export const activateRoutineService = async (routineId) => {
  try {
    const activatedRoutine = await Routine.findByIdAndUpdate(routineId, { isActive: true });
    return activatedRoutine;
  } catch (error) {
    throw new Error("Error activating routine: " + error.message);
  }
};

export const updateRoutineService = async (routineId, body) => {
  try {
    const { name, idUser, idClient, list_exercise, idTypeRoutine } = body;
    const object_create = {};
    if (!routineId) {
      return {
        status: NOT_FOUND,
        message: "seleccione una rutina a modificar",
      };
    }
    if (name) {
      object_create["name"] = name;
    }
    if (idClient) {
      object_create["idClient"] = idClient;
    }

    if (idUser) {
      object_create["idUser"] = idUser;
    }
    if (idTypeRoutine) {
      object_create["idTypeRoutine"] = idTypeRoutine;
    }
    let updatedRoutine = {};
    if (object_create) {
      updatedRoutine = await Routine.findByIdAndUpdate(routineId, object_create, { new: true });
    }
    if (list_exercise.length > 0) {
      updatedRoutine.exercises = [];
      for (const exercises of list_exercise) {
        const object_new = {};
        const searchExercise = await exercise.findOne({ _id: exercises.exercise });
        if (searchExercise) {
          object_new["exercise"] = searchExercise;
          object_new["cant"] = exercises.cant;
          object_new["repetition"] = exercises.repetition;
          object_new["weight"] = exercises.weight;
          const seaerchType = await TypeRoutine.findOne({ _id: idTypeRoutine }).exec();
          if (seaerchType && seaerchType.name == "cardio") {
            object_new["time"] = exercises.time;
          }
          if (updatedRoutine) {
            updatedRoutine.exercises.push(object_new);
            searchExercise.routines.push(updatedRoutine);
          } else {
            const search = await Routine.findOne({ _id: routineId });
            search.exercises.push(object_new);
            searchExercise.routines.push(search);
            await search.save();
          }
          await searchExercise.save();
        }
      }
    }
    if (updatedRoutine) {
      await updatedRoutine.save();
    }
    return {
      status: OK,
      message: "Rutina actualizada correctamente",
    };
  } catch (error) {
    throw new Error("Error updating routine: " + error.message);
  }
};

// Listar Routine
export const getAllRoutinesService = async () => {
  try {
    const routines = await Routine.find().populate("idClient idTypeRoutine idUser exercises.exercise");
    return routines.filter((routine) => !routine.idClient);
  } catch (error) {
    throw new Error("Error getting all routines: " + error.message);
  }
};

// Buscar Routine (por nombre)
export const searchRoutineByNameService = async (routineName) => {
  try {
    const regex = new RegExp(routineName, "i");
    const routines = await Routine.find({ name: regex }).populate("idClient idTypeRoutine idUser exercises.exercise");
    return routines;
  } catch (error) {
    throw new Error("Error searching routine by name: " + error.message);
  }
};

export const selectRoutine = async (idUser, idRutine, page = 1, limit = 1) => {
  if (!idUser) {
    return {
      status: NOT_FOUND,
      message: "Ingrese el id del cliente",
    };
  }
  if (!idRutine) {
    return {
      status: NOT_FOUND,
      message: "Ingrese el id del cliente",
    };
  }

  const userSearch = await user.findOne({ _id: idUser }).populate("role_id routines.routinesDays").exec();
  if (userSearch) {
    let result;
    const user_date_object = await search_routine(userSearch, idRutine);
    if (Object.entries(user_date_object).length > 0) {
      result = await pagination(user_date_object.RoutineSearch, page, limit, user_date_object.userId);
    } else {
      const searchRoutines = await Routine.findOne({ _id: idRutine }).exec();
      userSearch.routines.push({ routinesDays: searchRoutines, status: "pendiente" });
      userSearch.save();
      const user_date_object = await search_routine(userSearch, idRutine);
      result = await pagination(user_date_object.RoutineSearch, page, limit, user_date_object.userId);
    }
    return result;
  } else {
    return {
      status: NOT_FOUND,
      message: "Usuario no encontrado",
    };
  }
};
export const completeRoutine = async (body) => {
  const { idUser, idRutine, exerciseOne, state } = body;

  if (!state) {
    return {
      status: NOT_FOUND,
      message: "Ingrese el id del cliente",
    };
  }
  if (!idUser) {
    return {
      status: NOT_FOUND,
      message: "Ingrese el id del cliente",
    };
  }
  if (!idRutine) {
    return {
      status: NOT_FOUND,
      message: "Ingrese el id del cliente",
    };
  }
  if (!exerciseOne.name) {
    return {
      status: NOT_FOUND,
      message: "ingrese el nombre del ejercicio",
    };
  }
  if (!exerciseOne.image) {
    return {
      status: NOT_FOUND,
      message: "ingrese la imagen del ejercicio",
    };
  }
  if (!exerciseOne.video) {
    return {
      status: NOT_FOUND,
      message: "ingrese video del ejercicio",
    };
  }
  if (!exerciseOne.repetition) {
    return {
      status: NOT_FOUND,
      message: "ingrese repetition del ejercicio",
    };
  }
  if (!exerciseOne.series) {
    return {
      status: NOT_FOUND,
      message: "ingrese la series del ejercicio",
    };
  }
  if (!exerciseOne.weight) {
    return {
      status: NOT_FOUND,
      message: "ingrese el peso del ejercicio",
    };
  }
  if (!exerciseOne.time) {
    return {
      status: NOT_FOUND,
      message: "ingrese el tiempo del ejercicio",
    };
  }
  const day = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado "];
  const userSearch = await user.findOne({ _id: idUser }).exec();
  const routineSearch = await Routine.findOne({ _id: idRutine }).exec();
  const search_date = return_date();
  if (userSearch && routineSearch) {
    const complet = await exercisePerformed.create({
      state: state,
      exerciseOne: exerciseOne,
      days: day[search_date.weekDayNumber],
      dateDays: search_date.formatteddate,
      clientId: userSearch,
      routine: routineSearch,
    });
    complet.save();
    return complet;
  } else {
    return {
      status: NOT_FOUND,
      message: "Usuario o rutina no encontrado",
    };
  }
};
export const resultRoutines = async (idUser, idRutine) => {
  if (!idUser) {
    return {
      status: NOT_FOUND,
      message: "Usuario no encontrado",
    };
  }
  if (!idRutine) {
    return {
      status: NOT_FOUND,
      message: "Rutina no encontrado",
    };
  }
  const search_date = return_date();
  const results = await exercisePerformed
    .find({
      $and: [{ clientId: idUser }, { routine: idRutine }, { dateDays: search_date.formatteddate }],
    })
    .exec();
  let resultComplet = results.filter((result) => result.state == true);
  let resultIncomplet = results.filter((result) => result.state == false);
  let porcentaje = (resultComplet.length / results.length) * 100;
  return {
    resultComplet,
    resultIncomplet,
    porcentaje: `${porcentaje}%`,
  };
};
