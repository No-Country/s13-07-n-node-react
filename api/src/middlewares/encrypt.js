import bcryptjs from "bcrypt";
import pkg from "http-status";
const { NOT_FOUND, OK } = pkg;
export const hassPass = async (pass) => {
  return await bcryptjs.hash(pass, 10);
};

export const descriptPass = async (schema, email, pass) => {
  const userSearch = await schema.findOne({ email: email }).exec();
  if (userSearch) {
    const comparePass = await bcryptjs.compare(pass, userSearch.pass);
    if (comparePass) {
      let user = userSearch.toJSON();
      delete user.pass;

      return {
        status: OK,
        message: "Acceso permitido",
        user,
      };
    } else {
      return {
        status: NOT_FOUND,
        message: "Contraseña incorrecto",
      };
    }
  } else {
    return {
      status: NOT_FOUND,
      message: "Correo incorrecto",
    };
  }
};
