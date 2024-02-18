import { exercise } from "../db/schemas/exercise.schema.js";
import pkg from "http-status";
const { NOT_FOUND, CREATED, OK } = pkg;
export const exerciseServiceFilter = async () => {
  return await exercise.find();
};

export const exerciseServicePost = async (body) => {
  const { name } = body;

  if (!name || name == "") {
    return {
      status: NOT_FOUND,
      message: "fill in the name field",
    };
  }

  const search = await exercise.findOne({ name });
  if (search) {
    return {
      status: NOT_FOUND,
      message: "Error exercise it already exists",
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
      message: "fill in the name field",
    };
  }
  const search = await exercise.findOne({ _id: id });
  if (search) {
    await exercise.findOneAndUpdate({ _id: id }, { name: name.toLowerCase() });
    return {
      status: OK,
      message: "exercise updated successfully",
    };
  } else {
    return {
      status: NOT_FOUND,
      message: "update exercise not found",
    };
  }
};

export const exerciseServiceSearch = async (name) => {
  if (!name || name == "") {
    return {
      status: NOT_FOUND,
      message: "update exercise not found",
    };
  }
  return await exercise.findOne({ name: name.toLowerCase() });
};

export const exerciseServiceActive = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "exercise not found",
    };
  }
  const search = await exercise.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "exercise not found",
    };
  } else {
    if (!search.active) {
      search.active = true;
      search.save();
      return {
        status: OK,
        message: "activated exercise",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "exercise is already activated",
      };
    }
  }
};

export const exerciseServiceDeactivate = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "exercise not found",
    };
  }
  const search = await exercise.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "exercise not found",
    };
  } else {
    if (search.active) {
      search.active = false;
      search.save();
      return {
        status: OK,
        message: "disabled exercise",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "the exercise is already deactivated",
      };
    }
  }
};
