import mongoose from "mongoose";

const { Schema, model } = mongoose;

const gymSchema = new Schema({
  logo: String,
  name: String,
  active: { type: Boolean, default: true },
  address: String,
});

export const gym = model("Gym", gymSchema);
