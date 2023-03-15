const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

require("./db/connection");
// const Person = require("./models/Person");

const PORT_BACK = process.env.DB_PORT_BACK;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Rota inicial / endpoint

app.listen(PORT_BACK, () => {
  console.log(`Servidor rodando na porta: ${PORT_BACK}`);
});

// Routes

const UserRoutes = require("./routes/UserRoutes");

app.use("/users", UserRoutes);

app.get("/", (req, res) => {
  // Mostrar a req
  res.json({ message: "Oi express!" });
});

//pass Dn8FYGMy6m4zkbGB
//username vitordiamantino

//mongodb+srv://${DB_USER}:<${DB_PASSWORD}>@apicluster0.0ffk5gy.mongodb.net/?retryWrites=true&w=majority
