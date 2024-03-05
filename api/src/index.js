import express from "express";
import "dotenv/config";
import { db } from "./db/connections.js";

import { config } from "./middlewares/middleware.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "./routes/routes.js";
import configureSwagger from "./config/swagger/swagger.js";

const corsOptions = {
  credentials: true,
  origin: [
      `http://localhost:${process.env.PORT_SERVER}`,
      'https://gym-spotter.vercel.app/'
      ]
}
const app = express();
config(app, [morgan("dev"), cors(corsOptions), express.urlencoded({ extended: true }), express.json(), cookieParser()]);

// Utiliza la aplicación configurada que incluye todas las rutas
app.use("/api/v1", routes);

// Configurar Swagger UI
configureSwagger(app);

// Configura Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// Ruta de inicio que muestra el archivo "index.html"
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Inicialización de la base de datos
db();

// Inicio del servidor
const PORT = process.env.PORT_SERVER || 3001;
app.listen(PORT, () => {
  const HOST = process.env.HOST;
  console.log(`>> listening on ${HOST}${PORT === 443 ? "" : ":".concat(PORT)}`);
});
