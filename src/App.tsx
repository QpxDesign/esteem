import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calender from "./components/Calender";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontFamily: "monospace", textAlign: "center" }}>
        College Weather Explorer
      </h1>
      <Calender />
    </div>
  );
}

export default App;
