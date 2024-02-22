import mongoose from "mongoose";

const { Schema, model } = mongoose;

const muscleSchema = new Schema({
  name: String,
  active: { type: Boolean, default: true },
  typeMuscle: String,
});

export const muscle = model("Muscle", muscleSchema);
