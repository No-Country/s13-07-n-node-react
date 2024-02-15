import { rol } from "../db/schemas/rol.schema.js";
import pkg from "http-status";
const { NOT_FOUND, CREATED, OK } = pkg;
export const rolServiceFilter = async () => {
  return await rol.find();
};

export const rolServicePost = async (body) => {
  const { name } = body;
  const search = await rol.findOne({ name });
  if (search) {
    return {
      status: NOT_FOUND,
      message: "Error it already exists",
    };
  }
  const rolCreate = await rol.create({ name: name.toLowerCase() });
  rolCreate.save();
  return {
    status: CREATED,
    message: "successfully created role",
  };
};

export const rolServiceUpdate = async (body, id) => {
  const { name } = body;
  const search = await rol.findOne({ _id: id });
  console.log(search);
  if (search) {
    await rol.findOneAndUpdate({ _id: id }, { name: name.toLowerCase() });
    return {
      status: OK,
      message: "role updated successfully",
    };
  } else {
    return {
      status: NOT_FOUND,
      message: "update role not found",
    };
  }
};

export const rolServiceSearch = async (name) => {
  if (!name || name == "") {
    return {
      status: NOT_FOUND,
      message: "update role not found",
    };
  }
  return await rol.findOne({ name: name.toLowerCase() });
};

export const rolServiceActive = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "role not found",
    };
  }
  const search = await rol.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "role not found",
    };
  } else {
    if (!search.active) {
      search.active = true;
      search.save();
      return {
        status: OK,
        message: "activated role",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "role is already activated",
      };
    }
  }
};

export const rolServiceDeactivate = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "role not found",
    };
  }
  const search = await rol.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "role not found",
    };
  } else {
    if (search.active) {
      search.active = false;
      search.save();
      return {
        status: OK,
        message: "disabled role",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "the role is already deactivated",
      };
    }
  }
};
