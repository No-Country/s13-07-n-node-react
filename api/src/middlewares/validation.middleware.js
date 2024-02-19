import { generateValidationRules } from "../config/expressValidator/expressValidator-config.js";

export const createClientValidation = generateValidationRules("createClient", {
  firstName: {
    notEmpty: {},
    isLength: { min: 3, max: 40 },
    OnlyLetters: {},
  },
  lastName: {
    notEmpty: {},
    isLength: { min: 2, max: 40 },
    OnlyLetters: {},
  },
  email: {
    notEmpty: {},
    isEmail: {},
  },
  password: {
    notEmpty: {},
    isLength: { min: 8, max: 12 },
    password: {},
  },
});

export const updateClientValidation = generateValidationRules("updateClient", {
  firstName: {
    notEmpty: {},
    isLength: { min: 3, max: 40 },
    OnlyLetters: {},
  },
  lastName: {
    notEmpty: {},
    isLength: { min: 2, max: 40 },
    OnlyLetters: {},
  },
  birthdate: {
    notEmpty: {},
    isDate: {},
  },
});

export const loginClientValidation = generateValidationRules("loginClient", {
  email: {
    notEmpty: {},
    isEmail: {},
  },
  password: {
    notEmpty: {},
    isLength: { min: 8, max: 12 },
    password: {},
  },
});

export const uploadImageValidation = generateValidationRules("uploadImage", {
  image: {
    notEmptyFile: {},
    isImage: {},
  },
});
