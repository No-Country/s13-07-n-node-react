import cloudinary from "../config/cloudinary/cloudinary-config.js";
import Image from "../schemas/image.schema.js";
import { Readable } from "stream";

export const uploadImageService = async (req, res) => {
  try {
    const stream = Readable.from(req.file.buffer);

    // Subir la imagen a Cloudinary y obtener el resultado
    const cloudinaryResult = await new Promise((resolve, reject) => {
      stream.pipe(
        cloudinary.uploader.upload_stream((error, result) => {
          if (error) reject(error);
          else resolve(result);
        }),
      );
    });

    // Extraer los datos relevantes del resultado de Cloudinary
    const { public_id, secure_url } = cloudinaryResult;

    // Crear una nueva instancia del modelo de imagen y guardarla en la base de datos
    const newImage = new Image({
      public_id,
      photo_url: secure_url,
    });
    const savedImage = await newImage.save();

    // Devolver una respuesta de éxito con la nueva imagen creada
    return res.status(201).json({ message: "Imagen cargada con éxito", newImage: savedImage });
  } catch (error) {
    // Manejar errores y devolver una respuesta de error
    console.error("Error al cargar la imagen:", error);
    return res.status(500).json({ message: "Error al cargar la imagen" });
  }
};
