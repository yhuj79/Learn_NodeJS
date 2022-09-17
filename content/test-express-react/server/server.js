const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 5000;
const api = require("./route/index");

const db = mysql.createConnection({
  host: "localhost",
  user: "process.env.DATABASE_USERNAME",
  password: "process.env.DATABASE_PASSWORD",
  database: "process.env.DATABASE_NAME",
});

app.use("/api", api);

app.get("/api/dbtest", (req, res) => {
  const sql = "SELECT name FROM testTable";

  const params = req.query.idx;
  db.query(sql, params, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send(err);
    }
  });
});

app.listen(port, () => console.log(`Server Port - ${port}`));
