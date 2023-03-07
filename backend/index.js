const express = require("express");
const mongoose = require("mongoose");
const app = express();

// const Person = require("./models/Person");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);
const DB_USER = "vitordiamantino";
const DB_PASSWORD = encodeURIComponent("Dn8FYGMy6m4zkbGB");

// Rota inicial / endpoint

app.get("/", (req, res) => {
  // Mostrar a req
  res.json({ message: "Oi express!" });
});

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster0.0ffk5gy.mongodb.net/bancodaapiretryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000, function () {
      console.log("Server MongoDb is running on port " + 3000);
    });
  })
  .catch((err) => console.log("Error na aplicação", err));

//pass Dn8FYGMy6m4zkbGB
//username vitordiamantino

//mongodb+srv://${DB_USER}:<${DB_PASSWORD}>@apicluster0.0ffk5gy.mongodb.net/?retryWrites=true&w=majority
