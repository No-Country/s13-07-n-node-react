import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ClientModel from "../schemas/client.schema.js";
import dotenv from "dotenv";

dotenv.config();

export const createClientService = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

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
      email: lowerCaseEmail,
      password: hashedPassword,
    });

    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    console.error("Error creating client:", error);
    res.status(500).json({ message: "Error creating client" });
  }
};

export const loginClientService = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Convertir el email a minúsculas
    const lowerCaseEmail = email.toLowerCase();

    // Verificar si el cliente existe en la base de datos
    const client = await ClientModel.findOne({ email: lowerCaseEmail });
    if (!client) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    // Verificar si la contraseña es correcta
    const passwordMatch = await bcrypt.compare(password, client.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Si las credenciales son correctas, generar un token JWT
    const token = jwt.sign({ clientId: client._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Devolver el token como respuesta
    res.json({ token });
  } catch (error) {
    console.error("Error logging in client:", error);
    res.status(500).json({ message: "Error logging in client" });
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
