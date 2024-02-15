import swaggerUi from "swagger-ui-express";
import fs from "fs";

// Ruta al archivo JSON de definición Swagger
const swaggerDefinitionPath = new URL("../../../docs/swaggerDefinition.json", import.meta.url);

// Lee el contenido del archivo JSON de definición Swagger
const swaggerDefinition = JSON.parse(fs.readFileSync(swaggerDefinitionPath, "utf-8"));

export default function configureSwagger(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
}
