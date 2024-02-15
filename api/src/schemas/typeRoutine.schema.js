import mongoose from "mongoose";

const typeRoutineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 100,
    swagger: {
      type: "string",
      description: "The name of the TypeRoutine.",
    },
  },
  isActive: {
    type: Boolean,
    default: true,
    swagger: {
      type: "boolean",
      description: "Indicates whether the TypeRoutine is active or not.",
    },
  },
});

const TypeRoutine = mongoose.model("TypeRoutine", typeRoutineSchema);

export default TypeRoutine;
