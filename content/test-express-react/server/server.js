const express = require("express");
const app = express();
const port = 5000;
const api = require("./route/index");

app.use("/api", api);

app.listen(port, () => console.log(`Server Port - ${port}`));
