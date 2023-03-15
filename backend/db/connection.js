// const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const app = express();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// DB_USER=vitordiamantino;
// DB_PASSWORD=Dn8FYGMy6m4zkbGB;

// `mongodb+srv://${USER_DB}:${PASS_DB}@apicluster0.0ffk5gy.mongodb.net/?retryWrites=true&w=majority`

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@apicluster0.0ffk5gy.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  );
  const connection = mongoose.connection;

  connection.on("error", () => {
    console.error("Erro ao conectar com o MongoDb");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};

// async function main() {
//   await mongoose
// .connect(
//   `mongodb+srv://${dbUser}:${encodeURIComponent(
//     dbPassword
//   )}@apicluster0.0ffk5gy.mongodb.net/bancodaapiretryWrites=true&w=majority`
//     )
//     .then(() => {
//       app.listen(PORT_BACK, function () {
//         console.log("Server MongoDb is running on port " + PORT_BACK);
//       });
//     })
//     .catch((err) => console.log("Error na aplicação", err));
// }

connect();

module.exports = mongoose;
