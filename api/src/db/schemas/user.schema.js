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
        required: [true, 'El nombre del revisor debe estar presente']
      },
      rating: {
        type: Number,
        required: true,
        min: [1, 'No debe ser menor que 1']
        , max: [5, 'No puede ser mayor que 5']
      },
      comment: {
        type: String,
        maxLength: [150, 'El comentario no debe exceder de 150 caracteres']
      },
      client: {
        type: Schema.Types.ObjectId
        , required: [ true, 'Debe ingresar el ID del cliente']
      }
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
