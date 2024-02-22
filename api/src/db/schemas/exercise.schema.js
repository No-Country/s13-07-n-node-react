import mongoose from "mongoose";

const { Schema, model } = mongoose;

const exerciseSchema = new Schema({
  name: String,
  kcal: String,
  instructive: String,
  mucle_id: { type: Schema.Types.ObjectId, ref: "Muscle" },
  active: { type: Boolean, default: true },
});

export const exercise = model("Exercise", exerciseSchema);
