import bcryptjs from "bcrypt";
import pkg from "http-status";
const { NOT_FOUND, OK } = pkg;
export const hassPass = async (pass) => {
  return await bcryptjs.hash(pass, 10);
};

export const descriptPass = async (email, pass, schema) => {
  const userSearch = await schema.findOne({ email });
  if (userSearch) {
    const comparePass = await bcryptjs.compare(pass, userSearch.pass);
    if (comparePass) {
      return {
        status: OK,
        message: "access granted",
      };
    }
  } else {
    return {
      status: NOT_FOUND,
      message: "Wrong email",
    };
  }
};
