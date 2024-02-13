import express from "express";
import "dotenv/config";
import { db } from "./db/connections.js";
import { config } from "./middlewares/middleware.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "./routes/routes.js";

// Creación de la aplicación Express
const app = express();

config(app, [morgan("dev"), cors(), express.urlencoded({ extended: true }), express.json(), cookieParser()]);

// Utiliza las rutas definidas
app.use("/api/v1", routes);

// Inicialización de la base de datos
db();

// Inicio del servidor
const PORT = process.env.PORT_SERVER || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
