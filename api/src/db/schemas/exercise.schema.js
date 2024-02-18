import mongoose from "mongoose";

const { Schema, model } = mongoose;

const exerciseSchema = new Schema({
  name: String,
  active: { type: Boolean, default: true },
});

export const exercise = model("Exercise", exerciseSchema);
