const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "admin",
  database: "board_sample",
});

module.exports = db;
