import mongoose from "mongoose";

const { Schema, model } = mongoose;
const exercisePerformedSchema = new Schema({
  state: Boolean,
  routine: { type: Schema.Types.ObjectId, ref: "Routine" },
  exerciseOne: {
    name: String,
    image: String,
    video: String,
    series: Number,
    repetition: Number,
    weight: String,
    time: String,
  },
  days: String,
  dateDays: String,
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const exercisePerformed = model("ExercisePerformed", exercisePerformedSchema);
