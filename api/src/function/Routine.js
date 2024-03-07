import pkg from "http-status";
const { NOT_FOUND } = pkg;
import { exercise } from "../db/schemas/exercise.schema.js";
import { user } from "../db/schemas/user.schema.js";

export const pagination = async (object_routine, page, limit, user) => {
  const { exercises } = object_routine["routine"]["routinesDays"];
  if (page > exercises.length) {
    return {
      status: NOT_FOUND,
      message: "las pagina no puede ser mayor a la cantidad de ejercicio",
    };
  }
  const totalPage = Math.ceil(exercises.length / limit);
  const hasNextPage = page < totalPage;
  const hasPreviousPage = page > 1;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedExercises = exercises.slice(startIndex, endIndex);
  const searchExercise = await exercise.findOne({ _id: paginatedExercises[0]?.exercise }).exec();
  let search_create_object = {};
  for (const exerciseSearch of exercises) {
    if (paginatedExercises[0].exercise == exerciseSearch.exercise) {
      search_create_object["name"] = exerciseSearch.name;
      search_create_object["series"] = exerciseSearch.cant;
      search_create_object["repetition"] = exerciseSearch.repetition;
      search_create_object["weight"] = exerciseSearch.weight;
      search_create_object["time"] = exerciseSearch.time;
    }
  }
  const object_created = {
    _id: searchExercise?._id,
    name: searchExercise?.name,
    kcal: searchExercise?.kcal,
    instructive: searchExercise?.instructive,
    image: searchExercise?.image,
    video: searchExercise?.video,
    exercise: search_create_object,
  };
  const userSearch = {
    name: `${user?.firstName} ${user?.lastName}`,
    email: user?.email,
    image: user?.image,
  };
  return {
    teacher: userSearch,
    exerciseOne: object_created,
    exerciseTot: object_routine["cant"],
    pagNext: hasNextPage ? page + 1 : null,
    pagAnt: hasPreviousPage ? page - 1 : null,
  };
};

export const search_routine = async (userSearch, idRutine) => {
  let userId;
  let object_search = {};
  for (const routine of userSearch.routines) {
    if (routine["routinesDays"]["_id"] == idRutine) {
      userId = await user.findOne({ _id: routine["routinesDays"]["idUser"] }).exec();

      const cant = await routine?.routinesDays?.exercises.length;
      object_search = {
        RoutineSearch: { routine: routine, cant: cant },
        userId: userId ? userId : null,
      };
      break;
    }
  }
  return object_search;
};
