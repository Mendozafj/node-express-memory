import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor corriendo en la ruta http://localhost:${PORT}`);
  });