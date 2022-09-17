const express = require("express");
const path = require("path");
const app = express();
const port = 5000; // 포트 넘버 설정

// 데이터 받아서 전송 예시
app.get("/api/test", (req, res) => {
  res.send({
    name: "전송 성공",
    dtOne: "Apple",
    dtTwo: "Samsung",
    dtThr: "Microsoft",
  });
});

app.listen(port, () => console.log(port));
