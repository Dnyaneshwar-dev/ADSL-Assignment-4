const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM classroom;", (error, result) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

router.post("/", (req, res) => {
  const { building, room_number, capacity } = req.body;

  db.query(
    `INSERT INTO classroom VALUES ('${building}', '${room_number}', ${capacity});`,
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

module.exports = router;
