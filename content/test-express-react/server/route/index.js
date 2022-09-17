const express = require("express");
const router = express();

router.get("/test", (req, res) => {
  res.send({
    name: "전송 성공",
    dtOne: "Apple",
    dtTwo: "Samsung",
    dtThr: "Microsoft",
  });
});

module.exports = router;
