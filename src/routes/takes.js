const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM takes;", (error, result) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

router.post("/", (req, res) => {
  const { ID, course_id, sec_id, semester, year, grade } = req.body;

  db.query(
    `INSERT INTO takes VALUES ('${ID}', '${course_id}','${sec_id}', '${semester}', ${year}, '${grade}');`,
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
