const router = require("express").Router();

const Person = require("../models/Person");

router.post("/", async (req, res) => {
  const { name, username } = req.body;

  if (!name) {
    res.status(422).json({ error: "O nome é obrigatório!" });
  }

  if (!username) {
    res.status(422).json({ error: "O username é obrigatório!" });
  }

  const person = {
    name,
    username,
  };

  // create

  try {
    await Person.create(person);

    res.status(201).json({ message: "Pessoa inserida com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
