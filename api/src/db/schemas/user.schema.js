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
    type: Number, default: 0
  },
  role_id: { type: Schema.Types.ObjectId, ref: "Rol" },
  active: { type: Boolean, default: true },
  reviews: [{
    reviewer: { // Nombre de la persona que hace la reseña
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String
    }
  }]
});

export const user = model("User", userSchema);
