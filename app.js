import express from "express";
import profesorRoutes from "./src/routes/RoutesProfesor.js";
import materiaRoutes from "./src/routes/RoutesMateria.js";
import seccionRoutes from "./src/routes/RoutesSecciones.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', profesorRoutes);
app.use('/api', materiaRoutes);
app.use('/api', seccionRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en la ruta http://localhost:${PORT}`);
  });