const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");

// Importa las rutas
const productRouter = require("./routes/productsRouter");
const cartRouter = require("./routes/cartsRouter");

const port = 8080;
const app = express();

// Configura Swagger
const specs = swaggerJsdoc({
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Documentación de prueba",
      description: "Esto es una prueba",
    },
  },
  apis: [
    path.join(__dirname, "docs", "productsDoc", "products.yaml"),
    path.join(__dirname, "docs", "cartsDoc", "carts.yaml"),
  ],
});

app.use(`/apidocs`, swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  console.log("Conectado a la base de datos");
}

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
});
