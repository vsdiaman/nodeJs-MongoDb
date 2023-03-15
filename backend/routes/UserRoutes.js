const router = require("express").Router();

// const User = require("../models/UserControllers");

const UserController = require("../controllers/UserControllers");

router.post('/register', UserController.register)

// router.post("/register", async (req, res) => {
//   const { name, email, password, phone } = req.body;

//   if (!name) {
//     res.status(422).json({ error: "O nome é obrigatório!" });
//   }

//   if (!email) {
//     res.status(422).json({ error: "O email é obrigatório!" });
//   }

//   if (!password) {
//     res.status(422).json({ error: "O password é obrigatório!" });
//   }

//   if (!phone) {
//     res.status(422).json({ error: "O campo telefone é obrigatório!" });
//   }
//   const person = {
//     name,
//     email,
//     password,
//     phone,
//   };

//   // create

//   try {
//     await User.create(person);

//     res.status(201).json({ message: "Pessoa inserida com sucesso!" });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

module.exports = router;
