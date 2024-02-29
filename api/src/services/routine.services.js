import pkg from "http-status";
import Routine from "../db/schemas/routine.schema.js";
import { exercise } from "../db/schemas/exercise.schema.js";
import { user } from "../db/schemas/user.schema.js";
import TypeRoutine from "../db/schemas/typeRoutine.schema.js";
const { CREATED, NOT_FOUND, OK } = pkg;
export const createRoutineService = async (idClient, idTypeRoutine, idUser, name, list_exercise, times) => {
  try {
    if (!idTypeRoutine || !idUser || !name || list_exercise.length == 0 || !times) {
      return {
        status: NOT_FOUND,
        message: "Complete todos los campos",
      };
    }
    const newRoutine = new Routine({
      idTypeRoutine,
      idUser,
      name,
    });
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
        newRoutine.exercises.push(object_new);
        searchExercise.routines.push(newRoutine);
      }
      await searchExercise.save();
    }
    if (idClient) {
      newRoutine.idClient = idClient;
      const client = await user.findOne({ _id: idClient }).exec();
      await newRoutine.save();
      return {
        status: CREATED,
        message: `la rutina del cliente ${client.firstName} fue creada correctamente`,
      };
    }
    await newRoutine.save();
    return {
      status: CREATED,
      message: "rutina surgerida creada correctamente",
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
    return routines;
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
