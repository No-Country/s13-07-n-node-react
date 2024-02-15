import mongoose from "mongoose";

const { Schema, model } = mongoose;

const rolSchema = new Schema({
  name: String,
  active: { type: Boolean, default: true },
});

export const rol = model("Rol", rolSchema);
