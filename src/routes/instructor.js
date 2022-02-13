const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM instructor;", (error, result) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

router.post("/", (req, res) => {
  const { ID, name, dept_name, salary } = req.body;

  db.query(
    `INSERT INTO instructor VALUES ('${ID}', '${name}', '${dept_name}', ${salary});`,
    (error, result) => {
      if (error) {
        res.send({ ok: false, error: error });
        console.log(error);
      } else {
        res.send({ ok: true, data: result });
      }
    }
  );
});

router.get("/ID", (req, res) => {
  db.query("SELECT ID FROM instructor;", (error, result) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
