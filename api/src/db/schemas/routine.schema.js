import mongoose, { Schema } from "mongoose";

const routineSchemaDefinition = new mongoose.Schema({
  name: String,
  idClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    swagger: {
      type: "string",
      description: "The ID of the client associated with the routine.",
    },
  },
  idTypeRoutine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TypeRoutine",
    swagger: {
      type: "string",
      description: "The ID of the type of routine for the routine.",
    },
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    swagger: {
      type: "string",
      description: "The ID of the user who created the routine.",
    },
  },
  isActive: {
    type: Boolean,
    default: true, // Puedes establecer un valor predeterminado si lo deseas
    swagger: {
      type: "boolean",
      description: "Indicates whether the routine is active or not.",
    },
  },
  exercises: [
    {
      exercise: { type: Schema.Types.ObjectId, ref: "Exercise" },
      cant: Number,
      repetition: Number,
      weight: String,
      time: { type: String, default: null },
    },
  ],
  times: String,
});

const Routine = mongoose.model("Routine", routineSchemaDefinition);

export default Routine;
