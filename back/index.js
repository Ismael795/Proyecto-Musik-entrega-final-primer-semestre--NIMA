require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const CORS_ORIGIN = (
  process.env.CORS_ORIGIN || "http://localhost:5500,http://127.0.0.1:5500"
)
  .split(",")
  .map((origen) => origen.trim());

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

const articulos = [
  {
    id: 1,
    titulo: "El tango: una historia que nació a orillas del Río de la Plata",
    autor: "Ismael Viera Casas",
    categoria: "Tango",
    descripcion:
      "Origen, historia y evolución del tango rioplatense, de Gardel a Piazzolla.",
  },
  {
    id: 2,
    titulo: "La salsa: un ritmo nacido de la migración",
    autor: "MUSIK",
    categoria: "Salsa",
    descripcion:
      "Cómo la migración y el encuentro de culturas dieron origen a la salsa.",
  },
  {
    id: 3,
    titulo: "Artículo musical pendiente",
    autor: "Por completar",
    categoria: "Música",
    descripcion: "Espacio reservado para tu contenido.",
  },
  {
    id: 4,
    titulo: "Artículo musical pendiente",
    autor: "Por completar",
    categoria: "Música",
    descripcion: "Espacio reservado para tu contenido.",
  },
];

app.get("/articulos", (req, res) => {
  res.json(articulos);
});

app.get("/articulos/:id", (req, res) => {
  const id = Number(req.params.id);
  const articulo = articulos.find((a) => a.id === id);

  if (!articulo) {
    return res.status(404).json({ error: "Artículo no encontrado" });
  }

  res.json(articulo);
});

app.post("/articulos", (req, res) => {
  const { titulo, autor, categoria, descripcion } = req.body;

  if (!titulo || !autor || !descripcion) {
    return res.status(400).json({
      error: "Los campos título, autor y descripción son obligatorios",
    });
  }

  const nuevo = {
    id: articulos.length + 1,
    titulo,
    autor,
    categoria: categoria || "Sin categoría",
    descripcion,
  };

  articulos.push(nuevo);
  res.status(201).json(nuevo);
});

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
