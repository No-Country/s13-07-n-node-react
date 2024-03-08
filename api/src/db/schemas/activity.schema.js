import mongoose from "mongoose";

const { Schema, model } = mongoose;

const activitySchema = new Schema({
  name: String,
  description: String,
  start_time: Date,
  finish_time: Date,
  price: Number,
});

export const activity = model("Activity", activitySchema);
