import pkg from "http-status";
import { user } from "../db/schemas/user.schema.js";
import { descriptPass, hassPass } from "../middlewares/encrypt.js";
import { sendEmail } from "../middlewares/nodeMailer.js";
import cloudinary from "../config/cloudinary/cloudinary-config.js";
const { NOT_FOUND, CREATED, OK } = pkg;
export const userServiceFilter = async (firstName, lastName, phone, email, role_id) => {
  if (firstName || lastName || phone || email || role_id) {
    return await user
      .find({
        $or: [
          { firstName: firstName?.toLowerCase() },
          { lastName: lastName?.toLowerCase() },
          { phone: phone },
          { email: email?.toLowerCase() },
          { role_id: { _id: role_id } },
        ],
      })
      .populate("role_id");
  }
  return await user.find().populate("role_id");
};

export const userServicePost = async (body, file) => {
  const { firstName, lastName, phone, email, pass, role_id, description } = body;
  if (!firstName || !lastName || !phone || !email || !pass || !role_id || !description) {
    return {
      status: NOT_FOUND,
      message: "complete all fields",
    };
  }
  const search = await user.find({ $or: [{ email: email }, { phone: phone }] }).exec();

  if (search.length > 0) {
    return {
      status: NOT_FOUND,
      message: "the data is already registered",
    };
  }
  let variable;
  if (file) {
    const imageUrl = await cloudinary.uploader.upload(file);
    const { url } = imageUrl;
    body["url"] = url;
  } else {
    variable ="https://res.cloudinary.com/djasayobv/image/upload/v1702842963/rmryjkk8ukcdjmsrzjwq.jpg";
  }

  const passHash = await hassPass(pass);
  const userCreate = await user.create({
    firstName: firstName.toLowerCase(),
    lastName: lastName.toLowerCase(),
    phone: phone,
    description: description.toLowerCase(),
    email: email.toLowerCase(),
    image: body.url || variable,
    role_id: role_id,
    pass: passHash,
  });
  userCreate.save();
  await sendEmail(email);
  return {
    status: CREATED,
    message: "Usuario registrado correctamente",
  };
};

export const userServiceUpdate = async (body, id, file) => {
  const { firstName, lastName, phone, email, pass, role, description, role_id } = body;
  const search = await user.findOne({ _id: id });
  const userUpdate = {};
  if (firstName) {
    userUpdate["firstName"] = firstName.toLowerCase();
  }
  if (lastName) {
    userUpdate["lastName"] = lastName.toLowerCase();
  }
  if (phone) {
    userUpdate["phone"] = phone;
  }
  if (email) {
    userUpdate["email"] = email.toLowerCase();
  }
  if (pass) {
    const passHash = await hassPass(pass);
    userUpdate["pass"] = passHash;
  }
  if (role_id) {
    userUpdate["role_id"] = role;
  }

  if (description) {
    userUpdate["description"] = description.toLowerCase();
  }

  if (file) {
    const imageUrl = await cloudinary.uploader.upload(file);
    const { url } = imageUrl;
    userUpdate["image"] = url;
  }
  if (search) {
    await user.findOneAndUpdate({ _id: id }, userUpdate);
    return {
      status: OK,
      message: "Usuario actualizado correctamente",
    };
  } else {
    return {
      status: NOT_FOUND,
      message: "Error al actualizar el usuario",
    };
  }
};

export const userServiceActive = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "Usuario no encontrado",
    };
  }
  const search = await user.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "Usuario no encontrado",
    };
  } else {
    if (!search.active) {
      search.active = true;
      search.save();
      return {
        status: OK,
        message: "Usuario activado",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "El usuario ya se encuentra activado",
      };
    }
  }
};

export const userServiceDeactivate = async (id) => {
  if (!id || id == "") {
    return {
      status: NOT_FOUND,
      message: "Usuario no encontrado",
    };
  }
  const search = await user.findOne({ _id: id });
  if (!search) {
    return {
      status: NOT_FOUND,
      message: "Usuario no encontrado",
    };
  } else {
    if (search.active) {
      search.active = false;
      search.save();
      return {
        status: OK,
        message: "Usuario desactivado",
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "El usuario ya se encuentra desactivado",
      };
    }
  }
};

export const userServiceLogin = async (email, pass) => {
  return await descriptPass(user, email, pass);
};
