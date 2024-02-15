import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  lastName: String,
  phone: String,
  email: String,
  pass: String,
  image: String,
  role: { type: Schema.Types.ObjectId, ref: "Rol" },
  active: { type: Boolean, default: true },
});

export const user = model("User", userSchema);
