import { uploadImageService } from "../services/image.service.js";

export const uploadImage = async (req, res) => {
  await uploadImageService(req, res);
};
