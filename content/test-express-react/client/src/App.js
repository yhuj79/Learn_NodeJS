import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const url = "/api/test";
    axios
      .get(url)
      .then((res) => {
        setErr(false);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
        setErr(true);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Test-Express-React</h1>
        <br />
        {!err ? <h3>{data.name}</h3> : <h3>전송 실패</h3>}
        <br />
        <p>{data.dtOne}</p>
        <p>{data.dtTwo}</p>
        <p>{data.dtThr}</p>
      </header>
    </div>
  );
}

export default App;
