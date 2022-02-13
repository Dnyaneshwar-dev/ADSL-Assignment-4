const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  db.query(
    `SELECT * FROM appuser WHERE username='${username}';`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.send({ ok: false, error: error });
      } else {
        console.log("====================================");
        console.log(result);
        console.log("====================================");
        if (res.length == 0) {
          res.send({ ok: false, error: "User not found" });
          return;
        } else {
          if (result[0].password == password) {
            const token = jwt.sign({ user: username }, "SECRET_KEY");
            res.send({ ok: true, token: token });
          } else {
            res.send({ ok: false, error: "Wrong Password" });
          }
        }
      }
    }
  );
});

// router.post("/", (req, res) => {
//   const { user, password } = req.body;

//   db.query(
//     `INSERT INTO advisor VALUES ('${user}', '${i_ID}');`,
//     (error, result) => {
//       if (error) {
//         res.send({ ok: false, error: error });
//         console.log(error);
//       } else {
//         res.send({ ok: true, data: result });
//       }
//     }
//   );
// });

module.exports = router;
