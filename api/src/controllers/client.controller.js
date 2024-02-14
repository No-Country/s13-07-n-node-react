import {
  createClientService,
  getAllClientsService,
  getClientByIdService,
  updateClientService,
  deleteClientService,
  loginClientService,
} from "../services/client.service.js";

export const createClient = async (req, res) => {
  await createClientService(req, res);
};

export const loginClient = async (req, res) => {
  await loginClientService(req, res);
};

export const getAllClients = async (req, res) => {
  await getAllClientsService(req, res);
};

export const getClientById = async (req, res) => {
  await getClientByIdService(req, res);
};

export const updateClient = async (req, res) => {
  await updateClientService(req, res);
};

export const deleteClient = async (req, res) => {
  await deleteClientService(req, res);
};
