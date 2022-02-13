const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM prereq;", (error, result) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

router.post("/", (req, res) => {
  const { course_id, prereq_id } = req.body;

  db.query(
    `INSERT INTO prereq VALUES ('${course_id}', '${prereq_id}');`,
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
