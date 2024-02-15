import pkg from "http-status";
import { user } from "../db/schemas/user.schema.js";
import cloudinary from "../middlewares/upload.cjs";
import { hassPass } from "../middlewares/encrypt.js";
const { NOT_FOUND, CREATED, OK } = pkg;
export const userServiceFilter = async () => {
  return await user.find().populate("role");
};

export const userServicePost = async (body, file) => {
  const { name, lastName, phone, email, pass, role } = body;
  if (!name || !lastName || !phone || !email || !pass || !role || !file) {
    return {
      status: NOT_FOUND,
      message: "complete all fields",
    };
  }
  const search = await user
    .find({ $or: [{ email: email }, { phone: phone }] })
    .exec();

  if (search.length > 0) {
    return {
      status: NOT_FOUND,
      message: "the data is already registered",
    };
  }
  const imageUrl = await cloudinary.v2.uploader.upload(file);
  const passHash = await hassPass(pass);
  const { url } = imageUrl;
  const userCreate = await user.create({
    name: name.toLowerCase(),
    lastName: lastName.toLowerCase(),
    phone: phone,
    email: email.toLowerCase(),
    image: url,
    role: role,
    pass: passHash,
  });
  userCreate.save();
  return {
    status: CREATED,
    message: "successfully created user",
  };
};

export const userServiceUpdate = async (body, id, file) => {
  const { name, lastName, phone, email, pass, role } = body;
  const search = await user.findOne({ _id: id });
  const userUpdate = {};
  if (name) {
    userUpdate["name"] = name;
  }
  if (lastName) {
    userUpdate["lastName"] = lastName;
  }
  if (phone) {
    userUpdate["phone"] = phone;
  }
  if (email) {
    userUpdate["email"] = email;
  }
  if (pass) {
    const passHash = await hassPass(pass);
    userUpdate["pass"] = passHash;
  }
  if (role) {
    userUpdate["role"] = role;
  }
  if (file) {
    const imageUrl = await cloudinary.v2.uploader.upload(file);
    const { url } = imageUrl;
    userUpdate["image"] = url;
  }
  if (search) {
    await user.findOneAndUpdate({ _id: id }, userUpdate);
    return {
      status: OK,
      message: "user updated successfully",
    };
  } else {
    return {
      status: NOT_FOUND,
      message: "update user not found",
    };
  }
};

export const userServiceSearch = async (name) => {
  if (!name || name == "") {
    return {
      status: NOT_FOUND,
      message: "update user not found",
    };
  }
  return await user.findOne({ name: name.toLowerCase() }).populate("role");
};

export const userServiceActive = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "user not found",
    };
  }
  const search = await user.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "user not found",
    };
  } else {
    if (!search.active) {
      search.active = true;
      search.save();
      return {
        status: OK,
        message: "activated user",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "user is already activated",
      };
    }
  }
};

export const userServiceDeactivate = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "user not found",
    };
  }
  const search = await user.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "user not found",
    };
  } else {
    if (search.active) {
      search.active = false;
      search.save();
      return {
        status: OK,
        message: "disabled user",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "the user is already deactivated",
      };
    }
  }
};
