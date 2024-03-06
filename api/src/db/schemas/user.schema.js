import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  pass: String,
  description: String,
  image: String,
  rating: {
    type: Number,
    default: 0,
  },
  role_id: { type: Schema.Types.ObjectId, ref: "Rol" },
  active: { type: Boolean, default: true },
  reviews: [
    {
      reviewer: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
      },
    },
  ],
  routines: [
    {
      routinesDays: { type: mongoose.Types.ObjectId, ref: "Routine" },
      status: {
        type: String,
        enum: ["completado", "pendiente", "realizando"],
        default: "pendiente",
      },
    },
  ],
});

export const user = model("User", userSchema);
