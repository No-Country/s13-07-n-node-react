import bcrypt from "bcrypt";
import ClientModel from "../schemas/client.schema.js";

export const createClientService = async (req, res) => {
  try {
    const { firstName, lastName, documentNumber, phone, email, password, birthdate } = req.body;

    // Convertir el email a minúsculas
    const lowerCaseEmail = email.toLowerCase();

    // Verificar si el correo electrónico ya existe en la base de datos
    const existingClient = await ClientModel.findOne({ email: lowerCaseEmail });
    if (existingClient) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Encriptar la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newClient = new ClientModel({
      firstName,
      lastName,
      documentNumber,
      phone,
      email: lowerCaseEmail,
      password: hashedPassword,
      birthdate,
    });

    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    console.error("Error creating client:", error);
    res.status(500).json({ message: "Error creating client" });
  }
};

export const getAllClientsService = async (req, res) => {
  try {
    const clients = await ClientModel.find();
    res.json(clients);
  } catch (error) {
    console.error("Error getting clients:", error);
    res.status(500).json({ message: "Error getting clients" });
  }
};

export const getClientByIdService = async (req, res) => {
  try {
    const { clientId } = req.params;
    const client = await ClientModel.findById(clientId);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json(client);
  } catch (error) {
    console.error("Error getting client by ID:", error);
    res.status(500).json({ message: "Error getting client by ID" });
  }
};

export const updateClientService = async (req, res) => {
  try {
    const { clientId } = req.params;
    const updatedClient = await ClientModel.findByIdAndUpdate(clientId, req.body, { new: true });
    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json(updatedClient);
  } catch (error) {
    console.error("Error updating client:", error);
    res.status(500).json({ message: "Error updating client" });
  }
};

export const deleteClientService = async (req, res) => {
  try {
    const { clientId } = req.params;
    await ClientModel.findByIdAndUpdate(clientId, { isActive: false });
    res.json({ message: "Client deactivated successfully" });
  } catch (error) {
    console.error("Error deleting client:", error);
    res.status(500).json({ message: "Error deleting client" });
  }
};
