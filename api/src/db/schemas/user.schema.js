import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  pass: String,
  description: String,
  image: String,
  role_id: { type: Schema.Types.ObjectId, ref: "Rol" },
  active: { type: Boolean, default: true },
});

export const user = model("User", userSchema);
