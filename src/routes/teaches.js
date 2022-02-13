const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM teaches;", (error, result) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

router.post("/", (req, res) => {
  const { ID, course_id, sec_id, semester, year } = req.body;

  db.query(
    `INSERT INTO teaches VALUES ('${ID}', '${course_id}','${sec_id}','${semester}',${year});`,
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
