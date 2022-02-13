const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const department = require("./routes/department");
const student = require("./routes/student");
const course = require("./routes/course");
const prerequisite = require("./routes/prerequisite");
const teaches = require("./routes/teaches");
const classroom = require("./routes/classroom");
const instructor = require("./routes/instructor");
const section = require("./routes/section");
const advisor = require("./routes/advisor");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

app.use("/department", department);
app.use("/student", student);
app.use("/course", course);
app.use("/instructor", instructor);
app.use("/classroom", classroom);
app.use("/teaches", teaches);
app.use("/prerequisite", prerequisite);
app.use("/section", section);
app.use("/advisor", advisor);

const port = 5000;
app.listen(port, () =>
  console.log(`App running on port ${port}. http://localhost:${port}`)
);
