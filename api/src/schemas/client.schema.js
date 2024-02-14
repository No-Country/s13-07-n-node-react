import mongoose from "mongoose";

const clientSchemaDefinition = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    swagger: {
      type: "string",
      description: "The name of the client.",
    },
  },
  lastName: {
    type: String,
    required: true,
    swagger: {
      type: "string",
      description: "The last name of the client.",
    },
  },
  phone: {
    type: String,
    swagger: {
      type: "string",
      description: "The phone number of the client.",
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    swagger: {
      type: "string",
      format: "email",
      description: "The email address of the client.",
    },
  },
  password: {
    type: String,
    required: true,
    swagger: {
      type: "string",
      description: "The password of the client.",
    },
  },
  isActive: {
    type: Boolean,
    default: true,
    swagger: {
      type: "boolean",
      description: "Indicates whether the client is active or not.",
    },
  },
  birthdate: {
    type: Date,
    swagger: {
      type: "date",
      description: "The birthdate of the client.",
    },
  },
  barcode: {
    type: String,
    swagger: {
      type: "string",
      description: "The barcode of the client.",
    },
  },
  imageUrl: {
    type: String,
    default: "https://res.cloudinary.com/dxq0pypxu/image/upload/v1696476957/nn12qmebo7v6qhbwbkdf.png",
    swagger: {
      type: "string",
      description: "The image URL of the client.",
    },
  },
});

// Función toJSON personalizada para excluir campos sensibles
clientSchemaDefinition.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.verificationCode;
  delete obj.verificationCodeExpires;

  return obj;
};

const Client = mongoose.model("Client", clientSchemaDefinition);

export default Client;
