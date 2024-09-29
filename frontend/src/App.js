import React, { useState } from "react";
import FetchData from "./components/fetch_data";
import InputData from "./components/inputData";

function App() {
  const [showData, setShowData] = useState(false);
  const [inputData, setInputData] = useState(false);
  return (
    <React.Fragment>
      <button onClick={() => setShowData(!showData)}>Show Data</button>
      <button onClick={() => setInputData(!inputData)}>Input Data</button>
      {showData && <FetchData />}
      {inputData && <InputData />}
    </React.Fragment>
  );
}

export default App;
