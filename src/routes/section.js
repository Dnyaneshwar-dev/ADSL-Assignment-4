const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM section;", (error, result) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

router.post("/", (req, res) => {
  const {
    course_id,
    sec_id,
    semester,
    year,
    building,
    room_number,
    time_slot_id,
  } = req.body;

  db.query(
    `INSERT INTO section VALUES ('${course_id}', '${sec_id}', '${semester}', ${year}, '${building}', '${room_number}', '${time_slot_id}');`,
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

router.get("/primary_key", (req, res) => {
  db.query(
    "SELECT course_id, sec_id, semester, year FROM section;",
    (error, result) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
