const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "university",
});

connection.connect((error) => {
  if (error) {
    console.log(error);
    process.exit(1);
  } else {
    console.log("Connected to MySQL...");
  }
});

module.exports = connection;
