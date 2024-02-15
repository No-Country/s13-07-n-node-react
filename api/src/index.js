import express from "express";
import "dotenv/config";
import { db } from "./db/connections.js";
import { routesRol } from "./routes/rol.routes.js";
import { routesUser } from "./routes/user.routes.js";
import { routesExercise } from "./routes/exercise.routes.js";
import { config } from "./middlewares/middleware.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "./routes/routes.js";
const app = express();

config(app, [morgan("dev"), cors(), express.urlencoded({ extended: true }), express.json(), cookieParser()]);

// Utiliza las rutas definidas
app.use("/api/v1", routes);

// Configura Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// Ruta de inicio que muestra el archivo "index.html"
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Inicialización de la base de datos
db();

app.use("/rol", routesRol);
app.use("/user", routesUser);
app.use("/exercise", routesExercise);
// Inicio del servidor
const PORT = process.env.PORT_SERVER || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});