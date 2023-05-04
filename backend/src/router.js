const express = require("express");

const router = express.Router();
const bcrypt = require("bcrypt");
const connection = require("./database");

const saltRounds = 10;

connection
  .getConnection()
  .then(() => {
    console.info("connected to server");
  })
  .catch((err) => console.error(err));

router.post("/register", (req, res) => {
  const { pseudo } = req.body;
  const { password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error(err);
    }

    connection
      .query(
        "INSERT INTO users (pseudo, password) VALUES (?,?)",
        [pseudo, hash],
        (error) => {
          console.error(error);
        }
      )
      .catch(() => res.status(500).send("problème serveur"));
  });
});

router.post("/login", (req, res) => {
  const { pseudo } = req.body;
  const { password } = req.body;

  connection
    .query("SELECT * FROM users WHERE pseudo = ?;", pseudo)
    .then(([result]) => {
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (response) {
            res.send(result);
          } else {
            res.send({ message: "mauvaise combinaison pseudo/mot de passe" });
          }
        });
      } else {
        res.send({ message: "pas d'utilisateur à ce nom" });
      }
    })
    .catch(() => res.status(500).send("problème serveur"));
});

router.patch("/win-counter", (req) => {
  const { wins } = req.body;
  const pseudo = req.body.regiteredPseudo;

  connection.query("UPDATE users SET wins = ? WHERE pseudo = ?", [
    wins,
    pseudo,
  ]);
});

module.exports = router;
