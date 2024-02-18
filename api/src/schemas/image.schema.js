import mongoose from "mongoose";

const imageSchemaDefinition = new mongoose.Schema({
  public_id: {
    type: String,
    required: true,
    swagger: {
      type: "string",
      description: "The public ID of the image in Cloudinary.",
    },
  },
  photo_url: {
    type: String,
    required: true,
    swagger: {
      type: "string",
      description: "The secure URL of the image in Cloudinary.",
    },
  },
});

const Image = mongoose.model("Image", imageSchemaDefinition);

export default Image;
