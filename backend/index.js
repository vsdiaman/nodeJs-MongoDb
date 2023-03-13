const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

// const Person = require("./models/Person");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);
const USER_DB = process.env.DB_USER;
const PASS_DB = process.env.DB_PASSWORD;
const PORT_BACK = process.env.DB_PORT_BACK;
// Rota inicial / endpoint

// Routes


app.get("/", (req, res) => {
  // Mostrar a req
  res.json({ message: "Oi express!" });
});

mongoose
  .connect(
    `mongodb+srv://${USER_DB}:${encodeURIComponent(
      PASS_DB
    )}@apicluster0.0ffk5gy.mongodb.net/bancodaapiretryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT_BACK, function () {
      console.log("Server MongoDb is running on port " + PORT_BACK);
    });
  })
  .catch((err) => console.log("Error na aplicação", err));

//pass Dn8FYGMy6m4zkbGB
//username vitordiamantino

//mongodb+srv://${DB_USER}:<${DB_PASSWORD}>@apicluster0.0ffk5gy.mongodb.net/?retryWrites=true&w=majority
